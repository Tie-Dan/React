const express = require("express");
const app = express();
const users = require("./routes/users")
const debug = require("debug")("my-application");
const bodyParser = require("body-parser")
const auth = require("./routes/auth")


app.use(bodyParser.json());
app.use("/api/users",users);
app.use("/api/auth",auth);

app.listen(3030,(req,res) =>{
    debug("服务器运行在3030端口上");
})