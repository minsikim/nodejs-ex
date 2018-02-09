//require: nodejs에 구비되어 있는 (http모듈)을 가져와서 사용한다.
const http = require('http');
// 상수 선언
const hostname = '127.0.0.1';
const port = 1337;
//새로운 서버 구성
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
