const insertOrderOnMongo = require('../services/insert-on-mongo-service')

async function insertOrderMongo(req, res) {
    try {
        const { data } = req.body;
        const response = await insertOrderOnMongo.handle(data)

        res.status(201).json(response)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { insertOrderMongo }