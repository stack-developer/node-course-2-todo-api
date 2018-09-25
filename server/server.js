var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res)=>{
  // res.send(req.params);
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
     res.status(404).send('Invalid Todo Id');
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send('Unable to find Todo');
    }
    res.status(200).end({todo});
  }).catch((err)=>{
    res.status(400).send(2);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
