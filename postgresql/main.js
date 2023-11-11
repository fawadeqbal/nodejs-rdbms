const {client} = require('./connection')
async function createTable() {
  try {
    await client.connect();


    const result = await client.query('SELECT * FROM users');
    console.log('Query result:', result.rows);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await client.end();
  }
}

createTable();
