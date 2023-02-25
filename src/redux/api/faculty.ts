import { CreateFacultyType } from '../types/faculty';
import $api from './config';

export const createFacultyRequest = async (payload: CreateFacultyType) => {
	try {
		const response = await $api.post('/admin/add/faculty', payload);
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};

export const getFacultiesRequest = async () => {
	try {
		const response = await $api.get('/admin/list/faculties');
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};

export const deleteFacultyRequest = async ({ id }: { id: string }) => {
	try {
		const response = await $api.delete(`/admin/faculty/${id}`);
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};
