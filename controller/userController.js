const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/signin')

function signup(req,res){
  const salt = helper.random();
  const pass = helper.cryptoPass(req.body.password, salt)
  User.create({
    username: req.body.username,
    password: pass,
    email: req.body.email,
    salt: salt
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin (req, res){
  User.findOne({
    email: req.body.email
  })
  .then(result => {
    const salt = result.salt
    const pass = helper.cryptoPass(req.body.password, salt )
    if(result.password == pass){
      const token = jwt.sign({
        name:result.name,
        email: result.email,
        taskList: result.taskList
      }, process.env.SECRET_KEY)
      req.headers.token = token
      res.send(token)
    }else {
      res.send('wrong password')
    }
  })
  .catch(err =>{
    res.send(err)
  })
}
//==================

function getByIdTask(req, res){
  User.findOne({
    _id:req.params.id
  })
  .populate('taskList')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function addTask(req, res){
  User.where({
    _id: req.params.id
  })
  .update({
    $push:{
      taskList: req.body.taskList
    }
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function deleteTask(req, res){
  User.findOne({
    _id: req.params.id
  })
  .then(response => {
    const task = response.taskList;
    for(let i = 0; i < task.length; i++){
      if(task[i] == req.params.idt){
        task.splice(i,1)
      }
    }
    User.where({
      _id:req.params.id
    })
    .update({
      taskList: task
    })
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  // signup,
  // signin,
  addTask,
  deleteTask,
  getByIdTask
};
