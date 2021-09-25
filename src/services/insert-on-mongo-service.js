const axios = require("axios");
const { OportunityModel } = require("../database/schemas/oportunitySchema");

const URL = `https://bling.com.br/Api/v2/pedidos/json/?apikey=${process.env.BLING_API_KEY}`;

function calculateTotalSellingValue(data, response) {
    let totalSellingValue = 0;

    response.data.retorno.pedidos
                            .filter((i) => i.pedido.data == data)
                            .map((i) => (totalSellingValue += parseFloat(i.pedido.totalvenda)));

    return totalSellingValue
}

module.exports = {
  handle: async function (data) {
    const response = await axios.get(URL);
    const totalSellingValue = calculateTotalSellingValue(data, response)
    
    await OportunityModel.create({
      data,
      totalValue: totalSellingValue,
    });

    return {
        message: 'Criou e inseriu com sucesso no MongoDB'
    }
  },
};
