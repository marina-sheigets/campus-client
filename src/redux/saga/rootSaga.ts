import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import authSaga from './authSaga';

const sagasArray = [studentSaga(), authSaga()];
function* rootSaga() {
	yield all(sagasArray);
}

export default rootSaga;
