const axios = require('axios')
const { getDealsFromPipedrive } = require('../services/getDeals')

const URL = `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=`


async function insertProductOnBling(req, res) {
    const dataFromPipedrive = await getDealsFromPipedrive()
    
    dataFromPipedrive.map(async (i) => {
        const xml = `
            <pedido>
                <cliente>
                    <nome>${i.client}</nome>
                    <ie>388.108.598.269</ie>
                    <uf>SP</uf>
                </cliente>
                <itens>
                    <item>
                        <codigo>27i6b9v81</codigo>
                        <descricao>Item X</descricao>
                        <qtde>${i.quant}</qtde>
                        <vlr_unit>${i.value}</vlr_unit>
                    </item>
                </itens>
            </pedido>
        `
        
        await axios.post(`${URL}${xml}`)
    })
    
    return res.status(201).json({
        code: 201,
        message: 'Produto cadastrado no Bling com sucesso'
    })
}

module.exports = { insertProductOnBling }