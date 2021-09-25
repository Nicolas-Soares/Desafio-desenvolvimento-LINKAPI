const { Router } = require("express")

const { insertOrderBling } = require('./controllers/insert-order')
const { insertOrderMongo } = require('./controllers/mongodb-insert-order')

const routes = Router()

routes.post('/cadastro-produto', insertOrderBling)
routes.post('/inserir-no-mongodb', insertOrderMongo)

module.exports = { routes }