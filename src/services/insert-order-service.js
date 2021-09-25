const axios = require("axios");
const { getDealsFromPipedrive } = require("./get-deals-service");

const URL = `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=`;

function formatXML(deal) {
  const xml = `
    <pedido>
        <cliente>
            <nome>${deal.client}</nome>
            <ie>388.108.598.269</ie>
            <uf>SP</uf>
        </cliente>
        <itens>
            <item>
                <codigo>27i6b9v81</codigo>
                <descricao>Item X</descricao>
                <qtde>${deal.quant}</qtde>
                <vlr_unit>${deal.value}</vlr_unit>
            </item>
        </itens>
    </pedido>
`;

  return xml;
}

module.exports = {
  handle: async function () {
    const dealsFromPipedrive = await getDealsFromPipedrive();

    dealsFromPipedrive.map(async (deal) => {
      const xml = formatXML(deal);
      await axios.post(`${URL}${xml}`);
    });

    return {
      message: "Pedido inserido com sucesso no Bling",
    };
  },
};
