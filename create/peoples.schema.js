'use strict';

const dynamoose = require('dynamoose');

const peoplesSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.exports = dynamoose.model('peoples', peoplesSchema);
