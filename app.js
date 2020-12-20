const express = require('express')
const mysql = require('mysql')
const app = express()

app.set('ejs', ejs.renderFile)

const con = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'kumakuma',
    database: 'testdb'
  });

app.get('/', (req, res) => {

    con.query('select * from title', function (err, results, fields) {
        if (err) throw err
        res.render('index.ejs', { content: results })
    });

})

app.listen(3000, () => {
    console.log('server start')
})
