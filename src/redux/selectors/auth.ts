import { RootState } from '../reducers/rootReducer';

export const getAuthError = (state: RootState) => state.auth.authError;
export const getIsAuth = (state: RootState) => state.auth.isAuth;
export const getUser = (state: RootState) => state.auth.user;
