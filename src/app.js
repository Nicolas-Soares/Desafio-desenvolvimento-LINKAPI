require("dotenv").config();

const express = require("express");
const { routes } = require("./routes");
const { connectToDatabase } = require('./database/mongodb')

const app = express();

connectToDatabase()

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333, () => console.log("Server running"));
