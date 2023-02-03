import { all } from 'redux-saga/effects';
import studentSaga from './studentWatcher';
import authSaga from './authSaga';

const sagasArray = [studentSaga(), authSaga()];
function* rootSaga() {
	yield all(sagasArray);
}

export default rootSaga;
