"use strict";
const mysql = require("mysql");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: env(DB_HOST, "remotemysql.com"),
  user: env(DB_USERNAME, "58qBb1YrN2"),
  password: env(DB_PASSWORD, "V9339TG5LU"),
  database: env(DB_DATABASE, "58qBb1YrN2"),
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
