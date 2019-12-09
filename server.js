const express = require("express");

const app = express();

app.listen(5001 || process.env.PORT, () => {
    console.log("Server listening on port 5001");
});