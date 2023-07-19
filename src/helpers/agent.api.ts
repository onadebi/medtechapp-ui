import axios, { AxiosError, AxiosResponse } from 'axios';
import appsettings from '../configs/appsettings';
import { storeService } from '../services/storeService';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `${appsettings.backend.baseUrl}`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use((config)=>{
    return config;
},(error: AxiosError)=>{
    const {data, status} = error.response as AxiosResponse;
    switch(status){
        case 401:
            toast.error('Unauthorized');
            storeService.userService.logout();
            break;
        default:
            break;
    }
    console.log(data, status);
})

axios.interceptors.request.use((config)=>{
    let token : string | null  = storeService.tokenService.getAuthToken();
    if(token){
        token = JSON.parse(token).token;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
},(error: AxiosError)=>{
    const {data, status} = error.response as AxiosResponse;
    console.log(data, status);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const agent = {
    get: <T>(url: string) => axios.get<T>(`${url}`).then(responseBody),
    post: <T>(url: string, body: object) => axios.post<T>(`${url}`,body).then(responseBody),
}


export default agent;