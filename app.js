require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/db');
var Player = require('./models/Player');
var app = express();

app.listen('3030', function(){
  console.log('listening on http localhost port 3030');
});
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/', function(req,res){
  res.json([
        {name: 'Thomas',
         max_hp: '200',
         weapon: 'code',
         jewlery: 'watch',
         wepMod:'mighty',
         jewel: 'ruby'}
       ]);
// function(req, res){
//   Player.find({},{title:'1'}).then(function(players){
//
//     //  res.json(players);
//   });
});
app.post('/:id',function(req,res){

});
