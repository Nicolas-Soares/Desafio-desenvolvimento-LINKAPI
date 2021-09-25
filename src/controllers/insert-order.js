const insertOrderOnBling = require('../services/insert-order-service')

async function insertProductOnBling(req, res) {
    try {
        const response = await insertOrderOnBling.handle()

        res.status(201).json(response)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }    
}

module.exports = { insertProductOnBling }