var mongoose = require('mongoose');

// var mongoDB = 'mongodb://admin:secret@mongo:27017/express_test';

const db_usr = 'admin';
const db_pass = 'secret';
const db_host = 'mongo'
const db_port = 27017;
const db_name = 'express_test';
const mongoDB = `mongodb://${db_usr}:${db_pass}@${db_host}:${db_port}`;

mongoose.connect(mongoDB, {
  dbName: db_name,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
