var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surName: String,
    email: String,
    password: String,
    userName: String,
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
});

mongoose.model('User', userSchema);

module.exports = mongoose;