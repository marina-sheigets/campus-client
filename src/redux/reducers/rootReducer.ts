import { combineReducers, StateFromReducersMapObject } from '@reduxjs/toolkit';
import students from './studentReducer';
const reducers = { students };
const rootReducer = combineReducers(reducers);
export type RootState = StateFromReducersMapObject<typeof reducers>;
export default rootReducer;
