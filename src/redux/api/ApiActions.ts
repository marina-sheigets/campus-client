import { createActions } from '../../utils/actionCreator';

export const clearStudentStatusMessageAction = createActions('CLEAR_STUDENT_STATUS_MESSAGE');
export const createStudentAction = createActions('CREATE_STUDENT');
export const signInAction = createActions('SIGN_IN');
export const clearAuthErrorAction = createActions('CLEAR_AUTH_ERROR');
export const checkUserAuthAction = createActions('CHECK_USER_AUTH');
