const mysql =require('mysql');
var mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ychan123#',
    database:'mydb',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('db connection sucesss');
    else
    console.log('db connection failed:'+JSON.stringify(err, undefined,2));
});

module.exports=mysqlConnection;