const { Router } = require("express")

const { insertProductOnBling } = require('./controllers/insertOrder')
const { insertOrdersOnMongo } = require('./services/insertOnMongo')

const routes = Router()

routes.post('/cadastro-produto', insertProductOnBling)
routes.post('/inserir-por-data', insertOrdersOnMongo)

module.exports = { routes }