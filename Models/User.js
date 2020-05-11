var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    userName: String,
    avatarId: {
      type:String,
      default: "1"
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
});

mongoose.model('User', userSchema);

module.exports = mongoose;