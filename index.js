const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();
var corsMiddleware= function (req, res , next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    next();
}

app.use(express.json());
app.use(corsMiddleware);

app.use("/api/tasks", tasks);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = app;