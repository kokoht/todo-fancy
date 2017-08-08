const Task = require('../models/Task')

//ok
function createTask(req,res){
  Task.create({
    taskname: req.body.taskname,
    tags: req.body.tags,
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}


function findByIdTask(req, res){
  Task.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteByIdTask(req,res){
  Task.deleteOne({
    _id:req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function editByIdTask(req,res){
  Task.where({
    _id: req.params.id
  })
  .update({
    taskname: req.body.taskname
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function findAllTask(req,res){
  Task.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function addByIdTag(req,res){
  Task.where({
    _id: req.params.id
  })
  .update({
    $push:{
      tags: req.body.tags
    }
  })
  .then(result => (
    res.send(result)
  ))
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  createTask,
  findByIdTask,
  deleteByIdTask,
  editByIdTask,
  findAllTask,
  addByIdTag
};
