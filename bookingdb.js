const express=require("express");
const book=express.Router();
const mysqlConnection=require("./connection");


book.get('/booking/:id',(req, res)=>{
    mysqlConnection.query('SELECT * FROM booking WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


book.delete('/booking/:id',(req, res)=>{
    mysqlConnection.query('DELETE FROM booking WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send('Your booking has been canceled....');
        else
        console.log(err);
    })
});

book.post('/booking',(req, res)=>{
    let bok=req.body;
    var sql="SET @id=?;SET @name=?;SET @mobile=?;SET @email=?;SET @persons=?;SET @resname=?;SET @indate=?;SET @intime=?;SET @outdate=?;SET @outtime=?;\
    CALL BookingAddOrEdit(@id,@name,@mobile,@email,@persons,@resname,@indate,@intime,@outdate,@outtime);";
    mysqlConnection.query(sql,[bok.id,bok.name,bok.mobile,bok.email,bok.persons,bok.resname,bok.indate,bok.intime,bok.outdate,bok.outtime],(err,rows,fields)=>{
        if(!err)
        rows.forEach(element => {
            if(element.constructor == Array)
            res.send({ID:element[0].id});
        });
        else
        console.log(err);
    })
});

book.put('/booking',(req, res)=>{
    let bok=req.body;
    var sql="SET @id=?;SET @name=?;SET @mobile=?;SET @email=?;SET @persons=?;SET @resname=?;SET @indate=?;SET @intime=?;SET @outdate=?;SET @outtime=?;\
    CALL BookingAddOrEdit(@id,@name,@mobile,@email,@persons,@resname,@indate,@intime,@outdate,@outtime);";
    mysqlConnection.query(sql,[bok.id,bok.name,bok.mobile,bok.email,bok.persons,bok.resname,bok.indate,bok.intime,bok.outdate,bok.outtime],(err,rows,fields)=>{
        if(!err)
        res.send('Updated Sucessfully...!!!');
        else
        console.log(err);
    })
});

module.exports=book;