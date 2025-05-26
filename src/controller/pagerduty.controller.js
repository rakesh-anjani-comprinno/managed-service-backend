const pagerDutyApi = require('../services/pagerduty-api.service');

class PagerDutyController {

    static getAllServices = async (req,res) => {
        let params = { ...req.query }
        try{
            let services = []
            while(true){
                const response = await pagerDutyApi.get('/services',params)
                services = [...services, ...response?.data?.services ]
                if(!response.data.more){
                    break
                }
                params = {...params, offset: +(response.data.offset) + (response.data.limit) }
            }
            res.json(services)
        }catch(error){
            const { message,code,status,config : { url , params , method }} = error
            res.json({message,code,status,url,params,method,provider:'pagerduty'})
        }
        
    }

    static getIncidents = async (req,res) => {
        let params = req.query
        try{
            let incidents = []
            while(true){
                const response  = await pagerDutyApi.get('/incidents',params)
                incidents = [...incidents, ...response.data.incidents]
                if(!response.data.more){
                    break
                }
                params = {...params, offset: +(response.data.offset) + (response.data.limit)}
            }
            res.json(incidents);
        }catch(error){
            const { message,code,status,config : { url , params , method }} = error
            res.json({message,code,status,url,params,method,provider:'pagerduty'})
        }
    }
}

module.exports = {
    PagerDutyController
}