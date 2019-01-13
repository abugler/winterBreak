var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'web-dev.cnswmojifjds.us-east-2.rds.amazonaws.com',
  user     : 'team',
  password : 'caesarsux',
  database : 'mydb'
});

connection.connect();
var express = require('express')
var app = express();
var path =require('path');

app.set('port',process.env.PORT || 3000);


 /** 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

 
connection.end();

var express = require('express')
var app = express();
//app is a instance of the express object

app.get('/',function (req,res){
  res.send('hello world')
}) //This responds with 'hello world' when a get request is made

app.all('/secret', function (req,res,secretNext){
  //this function is called when ANY http request is made
  console.log('Secret Function')
  secretNext();
  //calls next function
})

function secretNext(){
  console.log("Secret");
}
*/
/**
 * Express html request handlers have special operators for the route names
 * '/ab?cd' //b is optional
 * '/ab+cd' //nonzero amount of 'b's
 * '/ab*cd' //any string is allowed to be in between ab and cd
 * /a/ //will match with any string with an "a" in it
 * /.*fly$/ //will match with anything ending with fly
 * (. denotes start, $ denotes end)
 **/
