import { all } from 'redux-saga/effects';
import studentSaga from './studentWatcher';

const sagasArray = [studentSaga()];
function* rootSaga() {
	yield all(sagasArray);
}

export default rootSaga;
