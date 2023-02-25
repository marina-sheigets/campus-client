import { combineReducers, StateFromReducersMapObject } from '@reduxjs/toolkit';
import students from './studentReducer';
import auth from './authReducer';
import faculty from './facultyReducer';

const reducers = { students, auth, faculty };
const rootReducer = combineReducers(reducers);
export type RootState = StateFromReducersMapObject<typeof reducers>;
export default rootReducer;
