import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bumblebee-cobli.herokuapp.com',
})

export default api;