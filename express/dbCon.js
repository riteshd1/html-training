const express = require('express');
const mysql = require('mysql');

const db_host= 'localhost';
const db_name = "expressjs_example";
const db_username="root";
const db_password="root";

const dbCon = mysql.createConnection({
    host:db_host,
    user:db_username,
    password:db_password,
    database:db_name
});

dbCon.connect(function(err){
    if(err) throw err;
    console.log("Database connected successfully!");
})

module.exports = dbCon;