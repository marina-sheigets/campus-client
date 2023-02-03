import axios from 'axios';

export const createStudentRequest = async (payload: any) => {
	try {
		const response = await axios.post('/admin/add/student', payload);
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Ops, something went wrong !',
		};
	}
};
