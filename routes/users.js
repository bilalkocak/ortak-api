var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");
var Group = mongoose.model("Group");

var md5 = require("md5");

/* GET users listing. */
router.get("/", function(req, res, next) {
  var _users = [];
  User.find({}, (error, users) => {
    if (error) {
      res.status(400).send({
        error
      });
    } else {
      users.map(user => {
        delete user.password
        _users.push(user)
      });
      res.status(200).send({
        users: _users
      });
    }
  });
});

router.get("/:id", function(req, res, next) {
  User.findById({ _id: req.params.id }, (error, user) => {
    if (error) {
      res.status(400).send(
        error
      );
    } else {
      res.status(200).send(
        user
      );
    }
  });
});

router.post("/create", function(req, res, next) {
  var _user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: md5(req.body.password),
    userName: req.body.userName
  };

  new User(_user).save((error, comment) => {
    if (error) {
      res.status(200).send({
        error
      });
    } else {
      delete _user.password
    res.status(200).send({
      user: _user
    });
    }
  });
});

router.delete("/delete/:id", function(req, res, next) {
  User.deleteOne({_id:req.params.id}, (error, next) => {
    if (error) {
      res.status(400).send({ 
        error: "Did not delete"
      });
    } else {
      res.status(200).send({
        res: "Deleted",
        _id:req.params.id
      });
    }
  });
});

router.put('/update', function(req, res, next) {
  const {userId, name, surname, email, userName} = req.body

  if (name&&surname&&email&&userName) {
    User.findOneAndUpdate({_id: userId}, {name, surname, email, userName}, {new: true},(error, next)=>{
      if (error) {
        res.status(400).send({
          error: 'Did not update'
        })
      } else {
        res.status(200).send({
          result: 'User updated',
          user: next
        })
      }
    })
  } else {
    res.status(400).send({
        error: 'Fields can not be null'
      })
  }
})

router.put('/join' , function(req,res,nex){
  const {userId,groupId} = req.body

  User.findOneAndUpdate({_id: userId},{$push: {groups: groupId}}, (error,next)=>{
    if (error) {
      res.status(400).send({
        error: 'Did not update'
      })
    } else {
      Group.findOneAndUpdate({_id: groupId}, {$push: {users: userId}}, (error,next)=>{
        if (error) {
          res.status(400).send({
            error: 'Did not update'
          })
        } else {
          res.status(200).send({
            res: "Joined user to group"
          })
        }
      })
    }
  })
})

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
          result: "Valid user",
          _id:user._id
        });
      } else {
        res.status(401).send({
          result: "Invalid user"
        });
      }
    }
  });
});

router.put('/update', function(req, res, next) {
  const {userId, name, surname, email, userName} = req.body

  if (name&&surname&&email&&userName) {
    User.findOneAndUpdate({_id: userId}, {name, surname, email, userName}, {new: true},(error, next)=>{
      if (error) {
        res.status(400).send({
          error: 'Did not update'
        })
      } else {
        res.status(200).send({
          error: 'User updated',
          user: next
        })
      }
    })
  } else {
    res.status(400).send({
        error: 'Fields can not be null'
      })
  }
})

router.put('/update/avatar', function(req, res, next) {
  const {userId, avatarId} = req.body

   User.findOneAndUpdate({_id: userId}, {avatarId}, {new: true},(error, next)=>{
    if (error) {
      res.status(400).send({
        error: 'Did not update'
      })
    } else {
       res.status(200).send({
        error: 'Avatar updated',
        user: next
      })
    }
  })
})


router.put('/leave' , function(req,res,next){
  const {userId,groupId} = req.body
  User.findOneAndUpdate({ _id:  userId}, { $pullAll: { groups: [groupId] } }, (error,next)=>{
    if (error) {
      res.status(400).send({
        error: 'Did not leave'
      })
    } else {
      Group.findOneAndUpdate({ _id:  groupId}, { $pullAll: { users: [userId] } }, (error,next)=>{
        if (error) {
          res.status(400).send({
            error: 'Did not update'
          })
        } else {
          res.status(200).send({
            res: "User leaved from group"
          })
        }
      })
    }
  })
})

module.exports = router;
