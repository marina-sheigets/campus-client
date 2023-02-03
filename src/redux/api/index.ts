import $api from './config';

export const createStudentRequest = async (payload: any) => {
	try {
		const response = await $api.post('/admin/add/student', payload);
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Ops, something went wrong !',
		};
	}
};

export const signInRequest = async ({ email, password }: { email: string; password: string }) => {
	try {
		const response = await $api.post('/auth/login', { email, password });
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Ops, something went wrong !',
		};
	}
};
