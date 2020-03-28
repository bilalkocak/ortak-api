var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groupSchema = new Schema({
    name: String,
    users: [Schema.Types.ObjectId],
});

mongoose.model('Group', groupSchema);

module.exports = mongoose;