const express = require("express");
const app = express();
const router = express.Router();

require("dotenv").config();


const SQL_USER = process.env.SQL_USERNAME;
const SQL_PASS = process.env.SQL_PASSWORD;
const SQL_SERVER = process.env.SQL_SERVER;
console.log(SQL_SERVER);

// Create connection to DB
// const config = {
//     authentication: {
//         options: {
//             userName: SQL_USER,
//             password: SQL_PASS
//         },
//         type: "default"
//     },
//     server: SQL_SERVER,
//     options: {
//         database: "BugTracker",
//         encrypt: true
//     }
// };

// const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through.
// connection.on("connect", err => {
//     if(err) {
//         console.error(err.message);
//     } else {
//         console.log("connection made!")
//         // queryDatabase();
//     }
// })

// app.use((req, res, next) => {
//     req.sql = tediousExpress(req, connection);
//     console.log(req.sql)
//     next();
// })

// router.get("/", (req, res) => {
//     res.send("Hello")
// })

app.get("/", (req, res) => {
    console.log("Hello")
})

// function queryDatabase() {
//     console.log("REading rows from the table...");

//     // Read all rows from table
//     // Make a query
//     const request = new Request('SELECT * FROM bt_user', (err, rowCount) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(rowCount + " rows")
//         }
//     })
//     request.on('row', (columns) => {
//         columns.forEach((column) => {
//             console.log(column.value)
//         })
//     })
//     connection.execSql(request)
// }

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen( process.env.PORT || 5001 , () => {
    console.log("Server listening on port 5001");
});