var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

var products = {
  1:{title:'The history of web 1'},
  2:{title:'The next web'},
}

app.get('/products/', function(req, res){
  var output = '';
  for(var name in products){
    output += `<li>
    <a href="/cart/${name}">${products[name].title}
    </li>`;
  }
  res.send(`<h1>Products</h1><ul>${output}<ul></br><a href="/cart/">Cart</a>`);
});

app.get('/cart/:id', function(req, res){

  res.send
}

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
