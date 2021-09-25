const { Schema, model } = require('mongoose')

const oportunitySchema = new Schema({
    data: {
        type: Date,
        required: true
    },
    totalValue: {
        type: Number,
        required: true
    }
})

const OportunityModel = model('Oportunity', oportunitySchema)

module.exports = { OportunityModel }