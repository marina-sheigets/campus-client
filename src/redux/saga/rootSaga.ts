import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import authSaga from './authSaga';
import facultySaga from './facultySaga';
import cathedraSaga from './cathedraSaga';
import specialtySaga from './specialtySaga';

const sagasArray = [
    studentSaga(),
    authSaga(),
    facultySaga(),
    cathedraSaga(),
    specialtySaga(),
];
function* rootSaga() {
    yield all(sagasArray);
}

export default rootSaga;
