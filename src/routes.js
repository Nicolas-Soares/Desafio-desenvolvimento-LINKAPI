const { Router } = require("express")

const { getDealsFromPipedrive } = require('./services/getDeals')
const { insertProductOnBling } = require('./controllers/insertProduct')

const routes = Router()

routes.post('/cadastro-produto', insertProductOnBling)

module.exports = { routes }