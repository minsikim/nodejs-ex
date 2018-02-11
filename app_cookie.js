var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookie/', function(req, res){
  if(req.cookies.count){
    var count = req.cookies.count
  }
  else var count = 0;
  count++;
  res.cookie('count', count);
  console.log('log : '+req.cookies.count);
  res.send('count : '+count);
})

app.listen(3000, function(){
  console.log('app_cookie.js, connected 3000 port!');
})
