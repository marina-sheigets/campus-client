import type { StudentRegistration } from '../types/student';
import $api from './config';

export const createStudentRequest = async (payload: StudentRegistration) => {
    try {
        const response = await $api.post('/auth/student/registration', payload);
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

export const getAllStudentsRequest = async () => {
    try {
        const response = await $api.get('/admin/list/students');
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

export const deleteStudentByIdRequest = async ({ id }: { id: string }) => {
    try {
        const response = await $api.delete(`/admin/student/${id}`);
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
