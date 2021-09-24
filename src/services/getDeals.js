const axios = require('axios')
const URL = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1/deals?api_token=${process.env.PIPEDRIVE_PERSONAL_API_TOKEN}`

async function getDealsFromPipedrive() {
    const response = await axios.get(URL)
    const filteredData = response.data.data
                        .filter(i => i.status == 'won')
                        .map(i => {
                            return {
                                title: i.title,
                                value: i.value,
                                quant: i.products_count
                            }
                        })
    
    return filteredData
}

module.exports = { getDealsFromPipedrive }