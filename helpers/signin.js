var crypto = require('crypto');

function cryptoPass(pass, secret){
  const hash = crypto.createHmac('sha256', secret)
                     .update(pass)
                     .digest('hex');
  return hash;
}

function random(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i=0; i<8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

module.exports = {
  cryptoPass,
  random
}
