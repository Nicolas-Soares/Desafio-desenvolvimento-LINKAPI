const getMongoData = require('../services/get-mongo-data-service')

async function getDataFromMongoDB(req, res) {
    try {
        const response = await getMongoData.handle()

        res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = { getDataFromMongoDB }