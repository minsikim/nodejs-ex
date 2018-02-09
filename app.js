var express = require('express');

var app = express();

//param1 = 포트번호
app.listen(3000, function(){
  console.log('connected 3000 port!');
})
//사용자가 localhost:3000/ 으로 들어왔을때
app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
})
app.get('/no2.html', function(req, res){
  res.send('Second page!');
})
