import axios from 'axios';

const API_URL = 'http://localhost:5000';
const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
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
		if (error.response.status === 401) {
			try {
				const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
				localStorage.setItem('token', response.data.accessToken);
				return $api.request(initialRequest);
			} catch (e) {
				console.log(e);
			}
		}
	}
);

export default $api;
