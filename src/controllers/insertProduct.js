const { v4: uuidv4 } = require('uuid')
const axios = require('axios')
const { getDealsFromPipedrive } = require('../services/getDeals')

const URL = `https://bling.com.br/Api/v2/produto/json/?apikey=${process.env.BLING_API_KEY}&xml=`


async function insertProductOnBling(req, res) {
    const dataFromPipedrive = await getDealsFromPipedrive()
    console.log(dataFromPipedrive)
    // const { body } = req
    // const xml =
    // `
    //     <produto>
	//         <descricao>${body.descricao}</descricao>
    //         <codigo>${uuidv4()}</codigo>
    //         <vlr_unit>${body.preco}</vlr_unit>
    //         <estoque>${body.estoque}</estoque>
    //     </produto>
    // `
    // const response = await axios.post(`${URL}${xml}`)
    
    // if (response.status !== 201) {
    //     res.status(response.status).json({
    //         code: response.status,
    //         message: `Retorno com status code ${response.status}`
    //     })
    // }

    // res.status(201).json({
    //     code: 201,
    //     message: 'Produto inserido no Bling'
    // })
}

module.exports = { insertProductOnBling }