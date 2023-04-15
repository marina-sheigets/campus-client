import axios from 'axios';

export const signInRequest = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    try {
        const response = await axios.post('/auth/login', { email, password });
        return { success: true, data: response.data };
    } catch (err: any) {
        return {
            success: false,
            data: err.response.data || 'Ops, something went wrong !',
        };
    }
};

export const checkUserAuthRequest = async () => {
    try {
        const response = await axios.get('/auth/refresh');

        return { success: true, data: response.data };
    } catch (err: any) {
        return {
            success: false,
            data: err.response.data || 'Ops, something went wrong !',
        };
    }
};

export const logOutRequest = async () => {
    try {
        const response = await axios.post('/auth/logout');

        return { success: true, data: response.data };
    } catch (err: any) {
        return {
            success: false,
            data: err.response.data || 'Ops, something went wrong !',
        };
    }
};

export const restorePasswordRequest = async ({ email }: { email: string }) => {
    try {
        const response = await axios.post('/auth/restore/password', { email });

        return { success: true, data: response.data };
    } catch (err: any) {
        return {
            success: false,
            data: err.response.data || 'Ops, something went wrong !',
        };
    }
};
