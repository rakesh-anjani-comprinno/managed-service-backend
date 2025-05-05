const axios = require('axios')
const config = require("../config");

const jiraApi = axios.create({
    baseURL:config.JIRA_BASE_URL,
    headers: {
        Authorization: `Basic ${Buffer.from(
      `${config.JIRA_ADMIN_USER_NAME}:${config.JIRA_ADMIN_PASSWORD_TOKEN}`
    ).toString('base64')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

module.exports = {
    get:(url,params) => jiraApi.get(url, {params}),
    post: (url, data) => jiraApi.post(url, data),
    put: (url, data) => jiraApi.put(url, data),
    delete: (url) => jiraApi.delete(url)
};