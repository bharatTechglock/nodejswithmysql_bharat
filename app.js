'use strict';
const express = require("express");
const conn = require("./db.conn");
const app = express();
const con = conn;
// Setup server port
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {

    // var sql = "CREATE TABLE customers (id integer(20) PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
    // var sql = "INSERT INTO customers (name, address) VALUES ?";
    // var values = [
    //     ['John', 'Highway 71'],
    //     ['Peter', 'Lowstreet 4'],
    //     ['Amy', 'Apple st 652'],
    //     ['Hannah', 'Mountain 21'],
    //     ['Michael', 'Valley 345'],
    //     ['Sandy', 'Ocean blvd 2'],
    //     ['Betty', 'Green Grass 1'],
    //     ['Richard', 'Sky st 331'],
    //     ['Susan', 'One way 98'],
    //     ['Vicky', 'Yellow Garden 2'],
    //     ['Ben', 'Park Lane 38'],
    //     ['William', 'Central st 954'],
    //     ['Chuck', 'Main Road 989'],
    //     ['Viola', 'Sideway 1633']
    // ];
    // con.query(sql, [values], function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    //     res.send(result);
    // });
    // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted, ID: " + result.insertId);
    //     res.send(result);
    // });
    // con.query("SELECT * FROM customers", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result);
    // });
    con.query('SELECT * from customers LIMIT 10', (err, rows) => {
        if (err) throw err;
        console.log('The data from customers table are: \n', rows);
        // connection.end();
    res.send(rows);
    });
});
app.listen(5000, () => {
    console.log('Server is running at port 5000');
});