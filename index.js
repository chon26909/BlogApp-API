require("dotenv").config();
require("./configs/database").connectDB();
// require("./configs/mutiDatabase").connectMultiDatabase();

const express = require("express");
const app = express();

const restaurantRoute = require("./routes/restaurant");
const tagRoute = require("./routes/tagRoute");

app.use("/restuarant", restaurantRoute);
app.use("/tag", tagRoute);

const { SERVER_PORT } = process.env;
const port = SERVER_PORT;
app.listen(port, () => {
    console.log("server start port", port);
})