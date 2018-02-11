var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('app_cookie.js, connected 3000 port!');
})

app.get('cookie/', function(req, res){
  var count = 0;
  res.send('count'+count);
})
