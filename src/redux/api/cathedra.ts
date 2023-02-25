import { CreateCathedraType } from '../types/cathedra';
import $api from './config';

export const createCathedraRequest = async (payload: CreateCathedraType) => {
	try {
		const response = await $api.post('/admin/add/cathedra', payload);
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};

export const getCathedrasRequest = async () => {
	try {
		const response = await $api.get('/admin/list/cathedras');
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};

export const deleteCathedraRequest = async ({ id }: { id: string }) => {
	try {
		const response = await $api.delete(`/admin/cathedra/${id}`);
		return { success: true, data: response };
	} catch (err: any) {
		return {
			success: false,
			data: err?.response?.data || { message: 'Ops, something went wrong !' },
		};
	}
};
