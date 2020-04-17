const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.get('/api/hello', (req,res)=>{
//     res.send({message: 'Hello express'})
// })

const fs = require('fs');
const data = fs.readFileSync('./database.json');
const mysql = require('mysql');

const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect()

app.get('/api/customers', (req, res)=>{
    connection.query("SELECT * FROM CUSTOMER WHERE isDeleted = 0", (err, rows, fields)=>{
        res.send(rows)
    });
});

const multer = require('multer');
const upload = multer({dest: './upload'})

app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res)=>{
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let gender = req.body.gender;
    let birthday = req.body.birthday;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    console.log(req.body)
    connection.query(sql, params, (err, rows, fields)=>{
        res.send(rows)
    })
})

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    console.log(req.params)
    console.log(req.body)
    let params = [req.params.id];
    connection.query(sql, params,(err, rows, fields) => {
        res.send(rows);
    })
});

app.listen(port, ()=>{
    console.log(`Listing on port ${port}`)
})