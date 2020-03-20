var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surName: String,
    email: String,
    password: String,
    userName: String,
    groups: [Schema.Types.ObjectId]
});

mongoose.model('User', userSchema);

module.exports = mongoose;