import { call, put, takeLatest } from 'redux-saga/effects';
import { checkUserAuthAction, signInAction } from '../api/ApiActions';
import { signInRequest, checkUserAuthRequest } from '../api';

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
		yield put(signInAction.failed({ message }));
	}
}

function* authWatcher() {
	yield takeLatest(signInAction.type.REQUEST, signIn);
	yield takeLatest(checkUserAuthAction.type.REQUEST, checkUserAuth);
}

export default authWatcher;
