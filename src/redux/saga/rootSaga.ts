import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import authSaga from './authSaga';
import facultySaga from './facultySaga';
import cathedraSaga from './cathedraSaga';
import specialtySaga from './specialtySaga';
import articleSaga from './articleSaga';

const sagasArray = [
    studentSaga(),
    authSaga(),
    facultySaga(),
    cathedraSaga(),
    specialtySaga(),
    articleSaga(),
];
function* rootSaga() {
    yield all(sagasArray);
}

export default rootSaga;
