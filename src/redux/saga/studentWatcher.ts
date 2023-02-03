import { createStudentAction } from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import { createStudentRequest } from '../api';

function* createStudent(action: any) {
	try {
		// @ts-ignore
		const res = yield call(createStudentRequest, { ...action.payload });
		yield put(createStudentAction.success(res));
	} catch ({ message }: any) {
		yield put(createStudentAction.failed({ message }));
	}
}
function* studentWatcher() {
	yield takeLatest(createStudentAction.type.REQUEST, createStudent);
}
export default studentWatcher;
