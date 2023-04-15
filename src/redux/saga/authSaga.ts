import { call, put, takeLatest } from 'redux-saga/effects';
import {
    automaticLogOutAction,
    checkUserAuthAction,
    logOutAction,
    restorePasswordAction,
    signInAction,
} from '../api/ApiActions';
import {
    signInRequest,
    checkUserAuthRequest,
    logOutRequest,
    restorePasswordRequest,
} from '../api';

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

function* automaticLogOut() {
    try {
        // @ts-ignore
        const res = yield call(logOutRequest);
        yield put(automaticLogOutAction.success(res));
    } catch ({ message }: any) {
        yield put(automaticLogOutAction.failed({ message }));
    }
}

function* restorePassword(action: {
    type: string;
    payload: { email: string };
}) {
    try {
        // @ts-ignore
        const res = yield call(restorePasswordRequest, action.payload);
        yield put(restorePasswordAction.success(res));
    } catch ({ message }: any) {
        yield put(restorePasswordAction.failed({ message }));
    }
}

function* authWatcher() {
    yield takeLatest(signInAction.type.REQUEST, signIn);
    yield takeLatest(checkUserAuthAction.type.REQUEST, checkUserAuth);
    yield takeLatest(logOutAction.type.REQUEST, logOut);
    yield takeLatest(automaticLogOutAction.type.REQUEST, automaticLogOut);
    yield takeLatest(restorePasswordAction.type.REQUEST, restorePassword);
}

export default authWatcher;
