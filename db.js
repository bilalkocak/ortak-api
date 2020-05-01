var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true, useFindAndModify: false});

require('./Models/User');
require('./Models/Group');
require('./Models/Payment');
