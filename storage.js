/*Javascript progress

const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const userData = require('./public/data.js');
const app = express();



app.engine("mustache", mustacheExpress());

app.set('views', './views')

app.set('view engine', 'mustache')

app.use('/mustache.css', express.static('public'))

app.get('/', function (req, res) {
  res.render('index', userData)
});


app.listen(3000, function (){
  console.log("Successfully started express application!")
});

app.get('/users/:id', function(req, res){
  let id = req.params.id;
  let user = data.users[id];
  res.render = ('user', user)
})
