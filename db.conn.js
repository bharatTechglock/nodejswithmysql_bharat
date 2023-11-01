'use strict';
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeWithSql"
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = conn;