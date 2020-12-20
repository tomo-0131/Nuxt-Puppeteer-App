const express = require('express')
const router = express.Router()
router.get('/users', (req, res, next) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'database_development',
    password: 'kumakuma'
  });
  var ret=[];
  connection.connect();
  connection.query('SELECT * from users;', function(error, row, fields){
    if (error) {
      console.log(error);
    }
    var dat = [];
    ret = JSON.stringify(dat);
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
  });
  connection.end();
})
module.exports = router
