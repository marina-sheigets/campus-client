import { call, put, takeLatest } from 'redux-saga/effects';
import { signInAction } from '../api/ApiActions';
import { signInRequest } from '../api';

function* signIn(action: any) {
	try {
		// @ts-ignore
		const res = yield call(signInRequest, action.payload);
		yield put(signInAction.success(res));
	} catch ({ message }: any) {
		yield put(signInAction.failed({ message }));
	}
}

function* authWatcher() {
	yield takeLatest(signInAction.type.REQUEST, signIn);
}

export default authWatcher;
