//server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);

// bodyParser setting
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// sql connect
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coren',
  database: 'node'
});

con.connect(function(err){
  if (err) throw err;
  console.log('Connected');
});

//

app.use(cors()); // cors 미들웨어를 삽입합니다.


//sql 사용예시
// const sql변수명 = "sql문";
// con.query(sql변수명, ?에 들어갈 값, 실행함수)

//유저 정보 불러오기
app.get('/sel_user', (req, res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  // select문 예시
  const sql = "select * from nodetest";
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  })
});

//유저 정보 insert
app.post('/ins_user', (req, res) => {
  const name = req.body.NAME;
  const sql = "INSERT INTO nodetest (NAME) VALUES (?)";
  con.query(sql, name, function(err, result, fields){
    if (err) throw err;
    res.send('');//안돌려주면 백엔드가 삐져서 일안함
  })
});

//유저 정보 delete
// app.post('/del_user', (req, res) => {
//   const data = req.body.data;
//   const sql = "DELETE from nodetest WHERE NAME = (?)";
//   con.query(sql, data, function(err, result, fields){
//     if (err) throw err;
//     console.log(result);
//   })
// })

server.listen(8080, ()=>{
  console.log('server is running on 8080')
});