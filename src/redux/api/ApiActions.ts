import { createActions } from '../../utils/actionCreator';

export const createStudentAction = createActions('CREATE_STUDENT');
export const signInAction = createActions('SIGN_IN');
export const clearAuthErrorAction = createActions('CLEAR_AUTH_ERROR');
