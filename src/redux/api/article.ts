import type { Article } from '../types/article';
import type { CreateFacultyType } from '../types/faculty';
import $api from './config';

export const createArticleRequest = async (payload: CreateFacultyType) => {
    try {
        const response = await $api.post('/admin/add/article', payload);
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

export const getArticlesRequest = async () => {
    try {
        const response = await $api.get('/admin/list/articles');
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

export const deleteArticleRequest = async ({ id }: { id: string }) => {
    try {
        const response = await $api.delete(`/admin/article/${id}`);
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

export const editArticleRequest = async (body: Article) => {
    try {
        const response = await $api.patch(
            `/admin/edit/article/${body.id}`,
            body
        );
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
