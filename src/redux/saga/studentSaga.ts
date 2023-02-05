import { createStudentAction } from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import { createStudentRequest } from '../api/student';
import { StudentRegistration } from '../types/student';

function* createStudent(action: { type: string; payload: StudentRegistration }) {
	try {
		console.log('saga');
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
