const { OportunityModel } = require('../database/schemas/oportunitySchema')

module.exports = {
    handle: async function () {
        const dataFromMongo = await OportunityModel.find({})
        return dataFromMongo
    }
}