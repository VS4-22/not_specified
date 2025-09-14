const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const uschma = mongoose.Schema({
name:String,
email:String,
image:String
})
module.exports = mongoose.model('user',uschma);
