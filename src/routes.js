const { Router } = require("express")
const { celebrate, Joi, Segments } = require('celebrate')

const { insertOrderBling } = require('./controllers/insert-order')
const { insertOrderMongo } = require('./controllers/mongodb-insert-order')
const { getDataFromMongoDB } = require('./controllers/get-mongodb-data')

const routes = Router()

routes.post('/cadastro-pedido-bling', insertOrderBling)
routes.post('/inserir-no-mongodb', celebrate({
[Segments.BODY]: Joi.object().keys({
        data: Joi.string().required()
    })
}), insertOrderMongo)

routes.get('/query-mongodb-data', getDataFromMongoDB)

module.exports = { routes }