//server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express(); // 백엔드 정의
const server = require('http').createServer(app);

// sql connect
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coren',
  database: 'test'
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
app.get('/', (req, res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  // select문 예시
  const sql = "select * from member";
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  })
  

});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
});