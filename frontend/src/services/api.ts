import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://sua-api-backend.onrender.com'
    : 'http://localhost:3001',
  withCredentials: true
});

export default api;
