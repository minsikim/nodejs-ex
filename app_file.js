//express 기본설정
var express = require('express');
var bodyParser = require('body-parser');
//파일시스템 제어용 모듈 로드
var fs = require('fs');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'jade');
app.set('views', './views_file');

app.listen(3000, function(){
  console.log('connected 3000 port!');
})

app.get('/topic/new', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send(err)
    }
  res.render('new', {topics:files});
  });
});
app.post('/topic', function(req, res){
  var title = req.body.title;
  var article = req.body.article;
  fs.writeFile('data/'+title, article, function(err){
    if(err){
      console.log(err);
      res.status(500).send(err)
    }
    fs.readdir('data', function(err, files){
      if(err){
        console.log(err);
        res.status(500).send(err)
      }
    res.render('view',{topics:files});
    });
  });
});
// app.get('/topic', function(req, res){
//   fs.readdir('data', function(err, files){
//     if(err){
//       console.log(err);
//       res.status(500).send(err)
//     }
//     res.render('view', {topics:files});
//   })
// });
//콜론(:)은 특수한 문자임
app.get(['/topic', '/topic/:id'], function(req, res){
  //id 값 있을때
  var id = req.params.id;
  if(id){
    fs.readdir('data', function(err, files){
      if(err){
        console.log(err);
        res.status(500).send(err)
      }
      fs.readFile('data/'+id, 'utf8', function(err, data){
        if(err){
          console.log(err);
          res.status(500).send('ERROR!')
        }
        console.log(id+':'+data);
        res.render('view', {title:id, topics:files, description:data});
        // res.send(data);
      })
    })
  } else {
    fs.readdir('data', function(err, files){
      if(err){
        console.log(err);
        res.status(500).send('ERROR!')
      }
      res.render('view', {title:"Welcome", topics:files,
      description:"this is a very simple webpage"});
    })
  }
});
