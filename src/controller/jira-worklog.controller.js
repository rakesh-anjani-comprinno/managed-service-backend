const jiraApi = require('../services/jira-api.service');

class jiraWorklogControll {

    static getUsers = async (req,res) => {
        let allUsers = [];
        let startAt = 0;
        const maxResults = 50; 
        let totaluser = 0
        try {
            while(true){
                const response = await jiraApi.get('/rest/api/3/users/search',{
                        startAt,
                        maxResults
                    }
                )
                allUsers = [...allUsers, ...response.data]
                totaluser = response.data.length
                if(maxResults > totaluser){
                    break;
                }
                startAt = startAt + maxResults
            }
            return res.json(allUsers);

        }catch(error){
            const { message,code,status,config : { url , params , method }} = error
            res.status(status || 500).json(error)
        }
    }

    static getWorklogIssues = async (req,res) => {
        try{
            const params = req.query
            const response = await jiraApi.get('/rest/api/3/search/jql',params)
            return res.json(response.data)
        }catch(error){
            const { message,code,status,config : { url , params , method }} = error
            res.status(status || 500).json(error)
        }
    }

    static getCount = async (req,res) => {
        const body = req.body
        const response = await jiraApi.post('/rest/api/3/search/approximate-count',body)
        return res.json(response.data)
    }

    static getAllWorkIssuesForExcelSheet = async (req,res) => {
        let params = req.query
        let issues = [];
        try {
            while(true){
                const response = await jiraApi.get('/rest/api/3/search/jql',{
                        ...params
                    }
                )
                issues = [...issues, ...response.data?.issues]
                let nextPageToken;
                if(response.data?.isLast){
                    break;
                }else{
                    nextPageToken = response.data?.nextPageToken
                }
                params = { ...params , nextPageToken : nextPageToken ?? nextPageToken }
            }
            return res.json(issues);
        }catch(error){ 
            const { message,code,status,config : { url , params , method }} = error
            res.status(status || 500).json(error)
        }
    }
}

module.exports = {
    jiraWorklogControll
}