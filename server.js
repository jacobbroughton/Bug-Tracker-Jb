const express = require("express");
const app = express();
require("dotenv").config();
const { Connection, Request } = require("tedious");

const SQL_USER = process.env.SQL_USERNAME;
const SQL_PASS = process.env.SQL_PASSWORD;
const SQL_SERVER = process.env.SQL_SERVER;
console.log(SQL_SERVER);

// Create connection to DB
const config = {
    authentication: {
        options: {
            userName: SQL_USER,
            password: SQL_PASS
        },
        type: "default"
    },
    server: SQL_SERVER,
    options: {
        database: "master",
        encrypt: true
    }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through.
connection.on("connect", err => {
    if(err) {
        console.error(err.message);
    } else {
        console.log("connection made!")
        // queryDatabase();
    }
})

function queryDatabase() {
    console.log("REading rows from the table...");

    // Read all rows from table
    // Make a query
}



app.listen(5001 || process.env.PORT, () => {
    console.log("Server listening on port 5001");
});