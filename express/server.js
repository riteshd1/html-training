const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbCon = require('./dbCon');
const {insertQuery,deleteQuery} = require('./dbClass');

const app = express();
const port = 1234;

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

app.get('/',(req,res)=>{
    // res.send("hello world");
    res.sendFile(path.join(__dirname, '/myhtml.html'));
});

app.post('/create-user',(req,res)=>{
    let userData = req.body;
    // if(userData.email=='') throw "Email required!";

    // const insertSql = `INSERT INTO users (id, name, email, phone, gender) VALUES(1,'${userData.name}','${userData.email}','${userData.phone}','${userData.gender}')`;
    const insertSql = insertQuery('users','id, name, email, phone, gender',`1,'${userData.name}','${userData.email}','${userData.phone}','${userData.gender}'`);

    dbCon.query(insertSql);
    console.log(req.body);

});

app.get('/get-users',(req,res)=>{
    const selectSql = "SELECT * from users";
    dbCon.query(selectSql, function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
    // console.log("result",res);
})


app.get('/delete-users/:id',(req,res)=>{
    let id = req.params.id;
    const deleteSql = `DELETE from users where id=${id}`;
    dbCon.query(deleteSql, function(err,result,fields){
        if(err) throw err;
        console.log(id+" :Record delete successfully");
    });
    //  console.log(req.params);
})

app.listen(port);