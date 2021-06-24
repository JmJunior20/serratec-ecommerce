import axios from "axios";
import utilStorage from "../utils/storage";

const api = axios.create({
    baseURL:'http://localhost:8080'
})

api.interceptors.request.use(async (config) => {

    let Authorization = utilStorage.obterTokenNaStorage();

    if(Authorization) {
        config.headers.Authorization = Authorization; 
    }

    return config;
})

export default api;