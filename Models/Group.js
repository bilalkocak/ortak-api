var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groupSchema = new Schema({
    name: String,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
      }
    ]
});

mongoose.model('Group', groupSchema);

module.exports = mongoose;