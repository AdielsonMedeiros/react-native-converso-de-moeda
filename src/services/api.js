import axios from 'axios';



// http://economia.awesomeapi.com.br/json/all/EUR-BRL


const api = axios.create({
    baseURL: 'http://economia.awesomeapi.com.br/json/'
})

export default api;