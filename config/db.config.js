"use strict";
const mysql = require("mysql");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: "remotemysql.com",
  user: "58qBb1YrN2",
  password: "V9339TG5LU",
  database: "58qBb1YrN2",
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
