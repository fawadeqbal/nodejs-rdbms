const express = require("express");
const mysql = require("mysql2"); // Use 'mysql2' for better performance and additional features
const dbConfig=require('./dbConfig.json')

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

const app = express();

app.use(express.json());
app.get("/admins", (req, res) => {
  connection.query("SELECT * FROM admins", (error, results, fields) => {
    if (error) {
      console.error("MySQL query error:", error);
    } else {
      // You can process the 'results' here, which contains the rows from the 'admins' table
      res.json(results);
      fields.map((items)=>{
        console.log(items)
      })
    }
    connection.end(); // Close the MySQL connection after the query is finished.
  });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
