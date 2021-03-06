var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Group = mongoose.model("Group");
var Payment = mongoose.model("Payment");
var User = mongoose.model("User");


router.post("/create", function(req, res, next) {

  new Payment(req.body).save((error, payment) => {
    if (error) {
      res.status(400).send({
        error
      })
    } else {
      Group.findOneAndUpdate({_id: req.body.group}, {$push: {payments: payment._id}}, (_error,group)=>{
        if (_error) {
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
  var newPayments=[]

    Payment.find({}, (error, payments) => {
      if (error) {
        res.status(400).send(
          error
        );
      } else {
        payments.map((payment,index)=>{
          User.findById(payment.user,(_error,_user)=>{

            if (_error) {
              res.status(400).send(
                _error
              );
            } else {
              newPayments.push(
                {
                  _id: payment._id,
                  name: payment.name,
                  user: _user,
                  description: payment.description,
                  charge: payment.charge,
                  status: payment.status,
                  group: payment.group,
                  date: payment.date,
                  __v: 0
                }
              )
              if(index+1===payments.length){
                res.status(200).send(
                  newPayments
                );
              }
            }
          })
          
        })
      }
      
    });
});
  
router.get("/:id", function(req, res, next) {
    Payment.findById({ _id: req.params.id }, (error, payment) => {
      if (error) {
        res.status(400).send(
          error
        );
      } else {
        User.findById(payment.user,(_error,_user)=>{
          if (_error) {
            res.status(400).send(
              _error
            );
          } else {
            res.status(200).send(
              {
                _id: payment._id,
                name: payment.name,
                user: _user,
                description: payment.description,
                charge: payment.charge,
                status: payment.status,
                group: payment.group,
                date: payment.date,
                __v: 0
              }
            );
          }
        })
      }  
    });
});

router.delete("/delete/:id", function(req, res, next) {
  const groupId = req.params.group
  const paymentId = req.params.id
  Payment.findOneAndDelete({_id:req.params.id}, (error, next) => {
    if (error) {
      res.status(400).send({ 
        error: "Did not delete"
      });
    } else {
      Group.findOneAndUpdate({ _id:  next.group}, { $pullAll: { payments: [paymentId] } },(_error,payment)=>{
        console.log(groupId,paymentId)
        console.log(1907)
        if (_error) {
          res.status(400).send({ 
            error: "Did not delete"
          });
        } else {
          console.log(next,req.params.id)
          console.log(1907)
          res.status(200).send({
            res: "Deleted",
            _id:req.params.id
          });
        }
      })
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
