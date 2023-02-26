import {
    createCathedraAction,
    getListOfCathedrasAction,
    deleteCathedraAction,
} from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
    createCathedraRequest,
    getCathedrasRequest,
    deleteCathedraRequest,
} from '../api/cathedra';
import type { CreateCathedraType } from '../types/cathedra';

function* createCathedra(action: {
    type: string;
    payload: CreateCathedraType;
}) {
    try {
        // @ts-ignore
        const res = yield call(createCathedraRequest, action.payload);
        yield put(createCathedraAction.success(res));
    } catch ({ message }: any) {
        yield put(createCathedraAction.failed({ message }));
    }
}

function* getCathedras() {
    try {
        // @ts-ignore
        const res = yield call(getCathedrasRequest);
        yield put(getListOfCathedrasAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(getListOfCathedrasAction.failed({ message }));
    }
}

function* deleteCathedra(action: { type: string; payload: { id: string } }) {
    try {
        // @ts-ignore
        const res = yield call(deleteCathedraRequest, action.payload);
        yield put(deleteCathedraAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(deleteCathedraAction.failed({ message }));
    }
}

function* studentWatcher() {
    yield takeLatest(createCathedraAction.type.REQUEST, createCathedra);
    yield takeLatest(getListOfCathedrasAction.type.REQUEST, getCathedras);
    yield takeLatest(deleteCathedraAction.type.REQUEST, deleteCathedra);
}
export default studentWatcher;
