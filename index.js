require("dotenv").config();
require("./configs/database").connectDB();

const express = require("express");
const app = express();

const tagRoute = require("./routes/tagRoute");

app.use("/tag", tagRoute)

const { SERVER_PORT } = process.env;
const port = SERVER_PORT;
app.listen(port, () => {
    console.log("server start port", port);
})