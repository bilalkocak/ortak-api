var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var paymentSchema = new Schema({
    name: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description: String,
    charge: Number,
    status: Boolean,
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    date: Date
});

mongoose.model('Payment', paymentSchema);

module.exports = mongoose;