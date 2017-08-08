'use strict'

const FB  = require('fb')
const User = require('../models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config()

function login(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', {fields: ['id','name','gender', 'link', 'email']} ,function(response){
    User.create({
      name: response.name,
      username: response.name,
      email: response.email,
      fb_token: accessToken
    })
    .then(log=>{
      console.log(log);
      const token = jwt.sign({
        id: response.id,
        name: response.name,
        gender: response.gender,
        link: response.link,
        email: response.email
      }, process.env.SECRET);

      const data = {
        token: token,
        name: response.name
      }
      res.send(data)
    })
  })
}

module.exports = {
  login
};
