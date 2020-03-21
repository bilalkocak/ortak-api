var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");
var md5 = require("md5");

/* GET users listing. */
router.get("/", function(req, res, next) {
  var _users = [];
  User.find({}, (error, users) => {
    _users = users;
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
  User.deleteOne( req.params.id , (error, next) => {
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

module.exports = router;
