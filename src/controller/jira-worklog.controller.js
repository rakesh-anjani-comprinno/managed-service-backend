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
            console.error({error});
            throw error;
        }
    }

    static getWorklogIssues = async (req,res) => {
        const params = req.query
        const response = await jiraApi.get('/rest/api/3/search',params)
        return res.json(response.data)
    }

    static getAllWorkIssuesForExcelSheet = async (req,res) => {
        let params = req.query
        let issues = [];
        try {
            while(true){
                const response = await jiraApi.get('/rest/api/3/search',{
                        ...params
                    }
                )
                issues = [...issues, ...response.data?.issues]
                if(response.data?.maxResults > response.data?.issues?.length){
                    break;
                }
                params = { ...params, startAt: response.data?.startAt + response.data?.maxResults}
            }
            return res.json(issues);
        }catch(error){
            console.log('error',error)
            const { message,code,status,config : { url , params , method }} = error
            // res.json({message,code,status,url,params,method,provider:'jira'})
            res.json(error)
        }
    }
}

module.exports = {
    jiraWorklogControll
}