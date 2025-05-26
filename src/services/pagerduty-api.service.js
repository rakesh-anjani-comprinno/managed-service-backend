const axios = require('axios')
const config = require("../config");

const pagerDutyApi = axios.create({
    baseURL:config.PAGERDUTY_BASE_URL,
    headers: {
        Authorization: `Token token=${config.PAGERDUTY_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

module.exports = {
    get:(url,params) => pagerDutyApi.get(url, {params}),
    post: (url, data) => pagerDutyApi.post(url, data),
    put: (url, data) => pagerDutyApi.put(url, data),
    delete: (url) => pagerDutyApi.delete(url)
};