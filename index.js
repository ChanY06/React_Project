const mysql =require('mysql');
const express =require('express');
const mysqlConnection=require("./connection");
const restaurentRest=require("./restaurentdb");
const bookingBook=require("./bookingdb");

var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use("/",restaurentRest);
app.use("/",bookingBook);


app.listen(3001,()=>console.log('Express server is runing at port no: 3001'));

