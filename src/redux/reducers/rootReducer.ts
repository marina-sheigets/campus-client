import { combineReducers, StateFromReducersMapObject } from '@reduxjs/toolkit';
import students from './studentReducer';
import auth from './authReducer';
const reducers = { students, auth };
const rootReducer = combineReducers(reducers);
export type RootState = StateFromReducersMapObject<typeof reducers>;
export default rootReducer;
