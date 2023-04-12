import {
    combineReducers,
    type StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import students from './studentReducer';
import auth from './authReducer';
import faculty from './facultyReducer';
import cathedra from './cathedraReducer';
import specialty from './specialtyReducer';
import article from './articleReducer';

const reducers = { students, auth, faculty, cathedra, specialty, article };
const rootReducer = combineReducers(reducers);
export type RootState = StateFromReducersMapObject<typeof reducers>;
export default rootReducer;
