import axios from 'axios';
import {getitem} from '@/api/gettoken'
 const request  = axios.create({
    baseURL:`http://139.196.42.209:5004`,
})

request.interceptors.request.use((config)=>{
     config.headers['token'] = getitem()
    return  config
})

request.interceptors.response.use((response)=>{
    return response
},err=>{
    return Promise.reject(err)
})
export default request