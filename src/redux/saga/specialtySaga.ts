import {
    createSpecialtyAction,
    getListOfSpecialtiesAction,
    deleteSpecialtyAction,
} from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
    createSpecialtyRequest,
    getSpecialtiesRequest,
    deleteSpecialtyRequest,
} from '../api/specialty';
import type { CreateFacultyType } from '../types/faculty';

function* createSpecialty(action: {
    type: string;
    payload: CreateFacultyType;
}) {
    try {
        // @ts-ignore
        const res = yield call(createSpecialtyRequest, action.payload);
        yield put(createSpecialtyAction.success(res));
    } catch ({ message }: any) {
        yield put(createSpecialtyAction.failed({ message }));
    }
}

function* getSpecialties() {
    try {
        // @ts-ignore
        const res = yield call(getSpecialtiesRequest);
        yield put(getListOfSpecialtiesAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(getListOfSpecialtiesAction.failed({ message }));
    }
}

function* deleteSpecialty(action: { type: string; payload: { id: string } }) {
    try {
        // @ts-ignore
        const res = yield call(deleteSpecialtyRequest, action.payload);
        yield put(deleteSpecialtyAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(deleteSpecialtyAction.failed({ message }));
    }
}

function* studentWatcher() {
    yield takeLatest(createSpecialtyAction.type.REQUEST, createSpecialty);
    yield takeLatest(getListOfSpecialtiesAction.type.REQUEST, getSpecialties);
    yield takeLatest(deleteSpecialtyAction.type.REQUEST, deleteSpecialty);
}
export default studentWatcher;
