require("dotenv").config();

const express = require("express");
const { routes } = require("./routes");
//IMPORTAR CONEXAO COM O BANCO

const app = express();

//CONECTAR AO BANCO

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333, () => console.log("Server running"));
