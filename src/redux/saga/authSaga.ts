import { call, put, takeLatest } from 'redux-saga/effects';
import {
    checkUserAuthAction,
    logOutAction,
    signInAction,
} from '../api/ApiActions';
import { signInRequest, checkUserAuthRequest, logOutRequest } from '../api';

function* signIn(action: any) {
    try {
        // @ts-ignore
        const res = yield call(signInRequest, action.payload);
        yield put(signInAction.success(res));
    } catch ({ message }: any) {
        yield put(signInAction.failed({ message }));
    }
}

function* checkUserAuth() {
    try {
        // @ts-ignore
        const res = yield call(checkUserAuthRequest);
        yield put(signInAction.success(res));
    } catch ({ message }: any) {
        yield put(checkUserAuthAction.failed({ message }));
    }
}
function* logOut() {
    try {
        // @ts-ignore
        const res = yield call(logOutRequest);
        yield put(logOutAction.success(res));
    } catch ({ message }: any) {
        yield put(logOutAction.failed({ message }));
    }
}

function* authWatcher() {
    yield takeLatest(signInAction.type.REQUEST, signIn);
    yield takeLatest(checkUserAuthAction.type.REQUEST, checkUserAuth);
    yield takeLatest(logOutAction.type.REQUEST, logOut);
}

export default authWatcher;
