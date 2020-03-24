var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");
var md5 = require("md5");

/* GET users listing. */
router.get("/", function(req, res, next) {
  var _users = [];
  let _user = {}
  User.find({}, (error, users) => {
    users.map(user => {
      _user.name=user.name
      _user.surName=user.surName
      _user.email=user.email
      _user.userName=user.userName
      _users.push(_user)
    });
    res.status(200).send({
      users: _users
    });
  });
});

router.get("/:id", function(req, res, next) {
  User.findById({ _id: req.params.id }, (error, user) => {
    res.status(200).send({
      user
    });
  });
});

router.get("/create", function(req, res, next) {
  res.render("create");
});

router.post("/create", function(req, res, next) {
  var _user = {
    name: req.body.name,
    surName: req.body.surName,
    email: req.body.email,
    password: md5(req.body.password),
    userName: req.body.userName
  };

  new User(_user).save((error, comment) => {
    res.status(200).send({
      user: _user
    });
  });
});

router.delete("/delete/:id", function(req, res, next) {
  User.deleteOne(req.params.id, (error, next) => {
    if (error) {
      res.send(400).send({
        error: "Did not delete"
      });
    } else {
      res.status(200).send({
        res: "Deleted"
      });
    }
  });
});

router.post("/login", function(req, res, next) {
  let reqObj = {};
  if (req.body.userName) {
    reqObj.userName = req.body.userName;
  }
  if (req.body.email) {
    reqObj.email = req.body.email;
  }
  User.findOne(reqObj, (error, user) => {
    if (!user) {
      res.status(401).send({
        result: "Invalid user"
      });
    } else {
      if (user.password === md5(req.body.password)) {
        res.status(200).send({
          result: "Valid user"
        });
      } else {
        res.status(401).send({
          result: "Invalid user"
        });
      }
    }
  });
});

module.exports = router;
