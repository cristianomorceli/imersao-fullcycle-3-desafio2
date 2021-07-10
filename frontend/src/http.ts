import axios from "axios";

const http = axios.create({
    baseURL: 'http://app-backend:3000'
})

export default http;