const express = require('express');
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const routes = require('./routes/api-routes.js'); 

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://oni1:ASSbutt1@ds043210.mlab.com:43210/heroku_28484d95", { useNewUrlParser: true });

require("./routes/html-routes.js")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });