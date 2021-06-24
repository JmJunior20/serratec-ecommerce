import axios from "axios";

const api = axios.create({
    baseURL:'https://seguranca-web-serratec.herokuapp.com'
})

export default api;