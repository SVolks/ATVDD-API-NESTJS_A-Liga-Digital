import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:3005`
    /* baseURL: process.env.REACT_APP_BASE_URL,*/
})

export default api;