const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/mongopract");
const uschma = mongoose.Schema({
username:String,
email:String,
key:String
})
module.exports = mongoose.model('user2',uschma);
