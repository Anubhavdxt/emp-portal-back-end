"use strict";
const mysql = require("mysql");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: "emp-reg-app.cihfgukfkzaj.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "5HPjwgmMwZ9RX6e",
  database: "emp-reg-app",
  //   host: DB_HOST,
  //   user: DB_USERNAME,
  //   password: DB_PASSWORD,
  //   database: DB_DATABASE,

  //   host: "localhost",
  //   user: "root",
  //   password: "@nubhav143744AD",
  //   database: "emp-reg-app",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
