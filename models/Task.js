var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  taskname: String,
  tags: Array
}, {
  versionKey: false
}, {
  timestamps: true
})

var Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;
