const { Client } = require('pg');
const dbConfig = require('./dbConfig')
const client = new Client(dbConfig);

module.exports={client}