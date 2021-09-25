const { Router } = require("express")

const { insertOrderBling } = require('./controllers/insert-order')
const { insertOrderMongo } = require('./controllers/mongodb-insert-order')
const { getDataFromMongoDB } = require('./controllers/get-mongodb-data')

const routes = Router()

routes.post('/cadastro-produto-bling', insertOrderBling)
routes.post('/inserir-no-mongodb', insertOrderMongo)
routes.get('/query-mongodb-data', getDataFromMongoDB)

module.exports = { routes }