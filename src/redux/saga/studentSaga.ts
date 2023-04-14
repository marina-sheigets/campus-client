import {
    createStudentAction,
    deleteStudentByIdAction,
    getAllStudentsAction,
} from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
    createStudentRequest,
    getAllStudentsRequest,
    deleteStudentByIdRequest,
} from '../api/student';
import type { StudentRegistration } from '../types/student';

function* createStudent(action: {
    type: string;
    payload: StudentRegistration;
}) {
    try {
        // @ts-ignore
        const res = yield call(createStudentRequest, { ...action.payload });
        yield put(createStudentAction.success(res));
    } catch ({ message }: any) {
        yield put(createStudentAction.failed({ message }));
    }
}

function* getAllStudents() {
    try {
        // @ts-ignore
        const res = yield call(getAllStudentsRequest);
        yield put(getAllStudentsAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(getAllStudentsAction.failed({ message }));
    }
}
function* deleteStudentById(action: { type: string; payload: { id: string } }) {
    try {
        // @ts-ignore
        const res = yield call(deleteStudentByIdRequest, action.payload);
        yield put(deleteStudentByIdAction.success(res.data.data));
    } catch ({ message }: any) {
        yield put(deleteStudentByIdAction.failed({ message }));
    }
}
function* studentWatcher() {
    yield takeLatest(createStudentAction.type.REQUEST, createStudent);
    yield takeLatest(getAllStudentsAction.type.REQUEST, getAllStudents);
    yield takeLatest(deleteStudentByIdAction.type.REQUEST, deleteStudentById);
}
export default studentWatcher;
