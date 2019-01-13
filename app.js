var express = require('express');
var app = express();
var path =require('path');

app.set('port',process.env.PORT || 8080);
app.set('views',__dirname+"/views");
app.set('view engine', 'jade');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'web-dev.cnswmojifjds.us-east-2.rds.amazonaws.com:3306',
  user     : 'team',
  password : 'caesarsux',
  database : 'mydb'
});

//https://www.w3schools.com/nodejs/nodejs_mysql.asp 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});

module.exports = (router) => {
    app.get('/added', (req, res)=>{
        res.send("User "+req.username+ " added!");
        info='('+req.username+','+req.birthday+','+req.favoriteColor+',NULL)';
        connection.query('INSERT INTO users VALUES'+info), (error, results)=>{
            if (error) res.sendStatus(500);
            else res.json({status:200, results:results})
        
    }});
    
    app.get('/deleted', (req, res)=>{
        res.send("User with id "+req.id+ " has been deleted!");
        let query =  'DELETE FROM andreas WHERE user_id = ?'
        connection.query(query, req.id, (error, results)=>{
            if (error) res.sendStatus(500);
            else res.json({status:200, results:results})
        
        })
    });
    
    app.get('/yeeted', (req,res)=>{
        res.send("Yeet");
        connection.query('INSERT INTO andreas VALUES ("yeet", "yote", 1000-10-10, NULL)');
    })
    /** 
     * THIS IS THE TEMPLATE
    app.get('/name',(req,res)=>{
        connection.query('mysql_query', [params], (error, results)=>{
            if (error) res.sendStatus(500);
            else res.json({status: 200, results: results})
        })
    });
    */
   return router;
}



