import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:1202/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

export default instance;