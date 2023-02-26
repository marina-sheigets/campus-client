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
