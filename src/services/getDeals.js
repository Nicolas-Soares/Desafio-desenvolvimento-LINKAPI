const axios = require('axios')
const URL = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1/deals?api_token=${process.env.PIPEDRIVE_PERSONAL_API_TOKEN}`

async function getData(req, res) {
    const response = await axios.get(URL)
    
    return res.status(200).send(response.data.data
                    .map(i => i.status == 'won' ? i.status : false)
                    .filter(i => i == 'won')
                    )
}

module.exports = { getData }