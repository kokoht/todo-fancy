var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  fb_token : {
    type     : String,
    required : true
  },
  //salt: String,
  taskList: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  versionKey: false
})

var Users = mongoose.model('User', userSchema);

module.exports = Users;
