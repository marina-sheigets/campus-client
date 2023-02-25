import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import authSaga from './authSaga';
import facultySaga from './facultySaga'

const sagasArray = [studentSaga(), authSaga(),facultySaga()];
function* rootSaga() {
	yield all(sagasArray);
}

export default rootSaga;
