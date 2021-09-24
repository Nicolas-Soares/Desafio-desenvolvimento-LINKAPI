const { Router } = require("express")

const { getData } = require('./services/getDeals')
const { insertProductOnBling } = require('./controllers/insertProduct')

const routes = Router()

routes.get('/', getData)
routes.post('/cadastro-produto', insertProductOnBling)

module.exports = { routes }