const axios = require('axios')
const URL = `https://bling.com.br/Api/v2/produto/json/?apikey=${process.env.BLING_API_KEY}&xml=`


async function insertProductOnBling(req, res) {
    const { body } = req
    const xml =
    `
        <produto>
	        <descricao>${body.descricao}</descricao>
        </produto>
    `
    const response = await axios.post(`${URL}${xml}`)
}

module.exports = { insertProductOnBling }