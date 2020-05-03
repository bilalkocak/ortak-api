var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Group = mongoose.model("Group");
var Payment = mongoose.model("Payment");
var User = mongoose.model("User");

/* GET groups listing. */
router.get("/", function(req, res, next) {
  Group.find({}, (error, groups) => {
    res.status(200).send({
      groups
    });
  });
});

router.get("/:id", function(req, res, next) {
  Group.findById({ _id: req.params.id }, (error, group) => {
    res.status(200).send(
      group
    );
  });
});

router.post("/create", function(req, res, next) {
  var _group = {
    name: req.body.name
  };

  new Group(_group).save((error, group) => {
    res.status(200).send(
      group
    );
  });
});

router.delete("/delete/:id", function(req, res, next) {
  Group.deleteOne({_id:req.params.id}, (error, next) => {
    if (error) {
      res.send(400).send({
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


module.exports = router;
