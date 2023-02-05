import axios from 'axios';

const API_URL = 'http://localhost:5000';
const $api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem('token');
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const initialRequest = error.config;
		if (error?.response.status === 401) {
			try {
				const response = await axios.get(`${API_URL}/auth/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem('token', response.data.accessToken);
				return $api.request(initialRequest);
			} catch (e) {
				return Promise.reject(e);
			}
		}
		return Promise.reject(error);
	}
);

export default $api;
