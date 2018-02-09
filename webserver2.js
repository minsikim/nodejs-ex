//require: nodejs에 구비되어 있는 (http모듈)을 가져와서 사용한다.
const http = require('http');
// 상수 선언
const hostname = '127.0.0.1';
const port = 1337;
//새로운 서버 구성
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//상단과 일치하는 코드
var server = http.createServer(function(request, response){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World\n');
});
//listen(접속포트번호, 어떤 ip를 수용대상으로 할것인가)
//listen 은 오래걸리는 작업이기 때문에 비동기적 작업으로 설정되있음
// 마지막 funtion으로 완료되었을때 실행될 펑션을 param에 넣음
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
