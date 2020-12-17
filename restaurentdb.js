const express=require("express");
const rest=express.Router();
const mysqlConnection=require("./connection");

rest.get('/restaurent',(req, res)=>{
    mysqlConnection.query('SELECT * FROM restaurent',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});



rest.get('/restaurent/:location',(req, res)=>{
    mysqlConnection.query('SELECT * FROM restaurent WHERE location=?',[req.params.location],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


module.exports=rest;