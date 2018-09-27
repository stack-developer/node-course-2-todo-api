var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://whiteanonymous:886ha-0048836@ds117423.mlab.com:17423/todoapp'
};
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
