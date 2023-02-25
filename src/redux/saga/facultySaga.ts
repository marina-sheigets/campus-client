import {
	createFacultyAction,
	getListOfFacultiesAction,
	deleteFacultyAction,
} from '../api/ApiActions';
import { put, takeLatest, call } from 'redux-saga/effects';
import { createFacultyRequest, getFacultiesRequest, deleteFacultyRequest } from '../api/faculty';
import { CreateFacultyType } from '../types/faculty';

function* createFaculty(action: { type: string; payload: CreateFacultyType }) {
	try {
		// @ts-ignore
		const res = yield call(createFacultyRequest, action.payload);
		yield put(createFacultyAction.success(res));
	} catch ({ message }: any) {
		yield put(createFacultyAction.failed({ message }));
	}
}

function* getFaculties() {
	try {
		// @ts-ignore
		const res = yield call(getFacultiesRequest);
		yield put(getListOfFacultiesAction.success(res.data.data));
	} catch ({ message }: any) {
		yield put(getListOfFacultiesAction.failed({ message }));
	}
}

function* deleteFaculty(action: { type: string; payload: { id: string } }) {
	try {
		// @ts-ignore
		const res = yield call(deleteFacultyRequest, action.payload);
		yield put(deleteFacultyAction.success(res.data.data));
	} catch ({ message }: any) {
		yield put(deleteFacultyAction.failed({ message }));
	}
}

function* studentWatcher() {
	yield takeLatest(createFacultyAction.type.REQUEST, createFaculty);
	yield takeLatest(getListOfFacultiesAction.type.REQUEST, getFaculties);
	yield takeLatest(deleteFacultyAction.type.REQUEST, deleteFaculty);
}
export default studentWatcher;
