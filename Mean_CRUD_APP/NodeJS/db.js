var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/CrudDB";

mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true },function(err) {
  if (err) throw err;
  console.log("Database Connected");
});
module.exports = mongoose; 