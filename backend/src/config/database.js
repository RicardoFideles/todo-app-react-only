const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost/react-todo';

var promise = mongoose.connect(url, {
  useMongoClient: true,
});

promise.then(function(db) {
    console.log(`Connect to mongodb ${db}`);
});

module.exports = {mongoose};



