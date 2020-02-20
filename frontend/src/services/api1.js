import axios from 'axios';

const api1 = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api1;