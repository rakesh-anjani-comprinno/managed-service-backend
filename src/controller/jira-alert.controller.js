const jiraApi = require('../services/jira-api.service');

class JiraAlertController {

    static getServiceDesk = async (req,res) => {
        const params = req.query || {}
        try{
            const response = await jiraApi.get('/rest/servicedeskapi/servicedesk',params)
            res.json(response.data);
        }catch(error){
            res.json(error)
        }
    }

    static getAllIssues = async (req,res) => {
        let params = req.query || {}
        let result = []
        try{
            while(true){
                const response = await jiraApi.get('rest/api/3/search/jql',params)
                result = [...result, ...response.data.issues ]
                if(!response.data?.nextPageToken){
                    break
                }
                params = {...params, nextPageToken: response.data.nextPageToken}
            }
            res.json(result)
        }catch(error){
            res.json(error);
        }
    }
}

module.exports = {
    JiraAlertController
}