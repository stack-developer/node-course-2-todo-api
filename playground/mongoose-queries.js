const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ba79f4049ab1d25181eaefa';

// if(!ObjectID.isValid(id)){
//   console.log('Id Not Valid');
// }

// Todo.find({_id:id}).then((todos)=>{
//   console.log(JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({_id:id}).then((todo)=>{
//   console.log(JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Unable to find todo');
//   }
//   console.log(JSON.stringify(todo, undefined, 2));
// })

User.findById(id).then((data)=>{
  if(!data){
    return console.log(`Unable to find User JSON.stringify(data, undefined, 2)`);
  }
  console.log('User of email is ', data);
}).catch((e)=>{
  console.log('User id is Invalid');
});
