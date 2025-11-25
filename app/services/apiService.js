import {apiGetClient, apiPostClient} from './axios-config'

let api_url = "http://127.0.0.1:8000"  
// let api_url = "http://localhost:4000" 

console.log(process.env.APIURL)
    console.log("cacheApiUrl-cacheApiUrl")
console.log("process.env.CACHE_API_URL")

//create the required functions
export default {
  // login(params) {
  //   return apiGetClient.get( `${api_url}/lig`,params)
  // },


  login(params){
    return apiPostClient.post(`${api_url}/login`, params)
  },  

  signup(params){
    return apiPostClient.post(`${api_url}/signup`, params)
  },

  sendInvoiceEmailWithAttachment( params){
    return apiPostClient.post(`${api_url}/send-invoice-email`, params)
  },

}