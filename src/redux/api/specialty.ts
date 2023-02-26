import type { CreateSpecialtyType } from '../types/specialty';
import $api from './config';

export const createSpecialtyRequest = async (payload: CreateSpecialtyType) => {
    try {
        const response = await $api.post('/admin/add/specialty', payload);
        return { success: true, data: response };
    } catch (err: any) {
        return {
            success: false,
            data: err?.response?.data || {
                message: 'Ops, something went wrong !',
            },
        };
    }
};

export const getSpecialtiesRequest = async () => {
    try {
        const response = await $api.get('/admin/list/specialties');
        return { success: true, data: response };
    } catch (err: any) {
        return {
            success: false,
            data: err?.response?.data || {
                message: 'Ops, something went wrong !',
            },
        };
    }
};

export const deleteSpecialtyRequest = async ({ id }: { id: string }) => {
    try {
        const response = await $api.delete(`/admin/specialty/${id}`);
        return { success: true, data: response };
    } catch (err: any) {
        return {
            success: false,
            data: err?.response?.data || {
                message: 'Ops, something went wrong !',
            },
        };
    }
};
