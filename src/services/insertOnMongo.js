const axios = require('axios')
const { OportunityModel } = require('../database/schemas/oportunitySchema')

const URL = `https://bling.com.br/Api/v2/pedidos/json/?apikey=${process.env.BLING_API_KEY}`


async function insertOrdersOnMongo(req, res) {
    const { data } = req.body
    const response = await axios.get(URL)
    let totalSellingValue = 0

    response.data.retorno.pedidos
                            .filter(i => i.pedido.data == data)
                            .map(i => totalSellingValue += parseFloat(i.pedido.totalvenda))
    
    
    OportunityModel.create({
        data,
        totalValue: totalSellingValue
    })

    res.status(201).json({
        code: 201,
        message: 'Criou com sucesso'
    })
}

module.exports = { insertOrdersOnMongo }