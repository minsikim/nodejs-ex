var express = require('express');

var app = express();
//스태틱한 자료 사용,
//public폴더를 사용 localhost 디렉토리에 바로 있는 것 처럼 사용
app.use(express.static('public'));
//사용할 템플릿 엔진을 지정해줌, 명령어 : 정해진 형식임
app.set('view engine', 'jade');
//템플릿(.jade)이 있는 폴더를 지정, 지정하지 않아도 views로 들어감
app.set('views', './views');
//param1 = 포트번호
app.get('/template', function(req, res){
  //뷰엔진(지정된템플릿엔진)으로 해석할 파일명
  //views 폴더에 temp.jade 파일이 있어야함
  //{중괄호에 json 형식을 주면  jade가 읽을수 있는
  //variable를 전달할 수 있음 jade, html로}
  res.render('temp', {time:Date()})
});
app.listen(3000, function(){
  console.log('connected 3000 port!');
})
//사용자가 localhost:3000/ 으로 들어왔을때 콜백 실행
app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
})
//사용자가 localhost:3000/no2.html 으로 들어왔을때 콜백 실행
app.get('/no2.html', function(req, res){
  res.send('Second page!');
})
//스태틱 데이터를 소스로 불러옴
app.get('/logo', function(req, res){
  res.send('<h1>Hello World!</h1><img src="/logo.jpg">');
})
//스태틱한 웹페이지를 불러옴 : localhost:3000/static.html 접속
//다이나믹하게 웹페이지를 생성
app.get('/dynamic', function(req, res){
  var dy = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello static
        <ul>
          <li>Cool stuff</li>
          <li>Cool stuff</li>
          <li>Cool stuff</li>
          <li>Cool stuff</li>
          <li>Cool stuff</li>
        </ul>
    </body>
  </html>
`;

  res.send(dy);
});
//다이나믹하게 웹페이지를 생성
app.get('/dynamic2', function(req, res){
  var li = '';
  var time = Date();
  for(var i = 0; i<5; i++){
    li += '<li>Cool stuff</li>';
  }
  var dy = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello static
        <ul>
        ${li}
        </ul>
        ${time}
    </body>
  </html>
`;

  res.send(dy);
})
