import axios from "axios";

const Apiservice=axios.create(
  {
    baseURL:`${import.meta.env.VITE_API_URL}`,
    headers:{
        'Content-Type':"application/json"
    }
}
)


 ApiService.interceptors.request.use((config)=>{
   const token= sessionStorage.getItem('token');
   if(token){
     config.headers.Authorization=`Bearer ${token}`
   }

    return config
 })
 export default Apiservice