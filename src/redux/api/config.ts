import axios from 'axios';

const API_URL = 'http://localhost:5000';
const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    async (error) => {
        return await Promise.reject(error);
    }
);

$api.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const initialRequest = error.config;
        if (initialRequest.url !== '/auth/login') {
            if (error?.response.status === 401 && !initialRequest._retry) {
                initialRequest._retry = true;
                try {
                    const response = await axios.get(
                        `${API_URL}/auth/refresh`,
                        {
                            withCredentials: true,
                        }
                    );
                    localStorage.setItem('token', response.data.accessToken);
                    return await $api.request(initialRequest);
                } catch (e) {
                    return await Promise.reject(e);
                }
            }
            return await Promise.reject(error);
        }
    }
);

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const initialRequest = error.config;
        if (initialRequest.url !== '/auth/login') {
            if (error?.response.status === 401 && !initialRequest._retry) {
                initialRequest._retry = true;
                try {
                    const response = await axios.get(
                        `${API_URL}/auth/refresh`,
                        {
                            withCredentials: true,
                        }
                    );
                    localStorage.setItem('token', response.data.accessToken);
                    return await axios.request(initialRequest);
                } catch (e) {
                    return await Promise.reject(e);
                }
            }
            return await Promise.reject(error);
        }
    }
);
export default $api;
