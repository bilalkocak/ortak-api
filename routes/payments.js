var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Group = mongoose.model("Group");
var Payment = mongoose.model("Payment");
var User = mongoose.model("User");


router.post("/create", function(req, res, next) {

  new Payment(req.body).save((error, payment) => {
    if (error) {
    } else {
      Group.findOneAndUpdate({_id: req.body.group}, {$push: {payments: payment._id}}, (error,group)=>{
        if (error) {
          res.status(400).send({
            error: 'Did not update'
          })
        } else {
          res.status(200).send(
              payment
          );
        }
      })
    }
  });
});

router.get("/", function(req, res, next) {
    Payment.find({}, (error, payments) => {
      res.status(200).send(
          payments
      );
    });
});
  
router.get("/:id", function(req, res, next) {
    Payment.findById({ _id: req.params.id }, (error, payment) => {
      res.status(200).send(
        payment
      );
    });
});

router.delete("/delete/:id", function(req, res, next) {
  Payment.deleteOne({_id:req.params.id}, (error, next) => {
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

router.put('/update/status', function(req, res, next) {
  const {paymentId, status} = req.body

  if (paymentId&&status) {
    Payment.findOneAndUpdate({_id: paymentId}, {status}, {new: true},(error, next)=>{
      if (error) {
        res.status(400).send({
          error: 'Did not update'
        })
      } else {
        res.status(200).send({
          result: 'User updated',
          payment: next
        })
      }
    })
  } else {
    res.status(400).send({
        error: 'Fields can not be null'
      })
  }
})


module.exports = router;
