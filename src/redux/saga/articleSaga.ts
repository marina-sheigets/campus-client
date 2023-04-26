import {
    createArticleAction,
    getListOfArticlesAction,
    deleteArticleAction,
    editArticleAction,
} from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
    createArticleRequest,
    getArticlesRequest,
    deleteArticleRequest,
    editArticleRequest,
} from '../api/article';
import type { CreateFacultyType } from '../types/faculty';
import type { Article } from '../types/article';

function* createArticle(action: { type: string; payload: CreateFacultyType }) {
    try {
        // @ts-ignore
        const res = yield call(createArticleRequest, action.payload);
        yield put(createArticleAction.success(res));
    } catch ({ message }: any) {
        yield put(createArticleAction.failed({ message }));
    }
}

function* getArticles() {
    try {
        // @ts-ignore
        const res = yield call(getArticlesRequest);
        yield put(getListOfArticlesAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(getListOfArticlesAction.failed({ message }));
    }
}

function* deleteArticle(action: { type: string; payload: { id: string } }) {
    try {
        // @ts-ignore
        const res = yield call(deleteArticleRequest, action.payload);
        yield put(deleteArticleAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(deleteArticleAction.failed({ message }));
    }
}

function* editArticle(action: { type: string; payload: Article }) {
    try {
        // @ts-ignore
        const res = yield call(editArticleRequest, action.payload);
        yield put(editArticleAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(editArticleAction.failed({ message }));
    }
}

function* studentWatcher() {
    yield takeLatest(createArticleAction.type.REQUEST, createArticle);
    yield takeLatest(getListOfArticlesAction.type.REQUEST, getArticles);
    yield takeLatest(deleteArticleAction.type.REQUEST, deleteArticle);
    yield takeLatest(editArticleAction.type.REQUEST, editArticle);
}
export default studentWatcher;
