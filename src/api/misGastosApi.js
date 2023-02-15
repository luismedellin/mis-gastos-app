import axios from 'axios';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

const misGastosApi = axios.create({
    baseURL: apiServerUrl
});


misGastosApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
    };

    return config;
});

export default misGastosApi;