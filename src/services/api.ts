import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://database-production-4792.up.railway.app'
})