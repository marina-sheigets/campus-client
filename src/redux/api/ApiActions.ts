import { createActions } from '../../utils/actionCreator';

export const clearStudentStatusMessageAction = createActions('CLEAR_STUDENT_STATUS_MESSAGE');
export const createStudentAction = createActions('CREATE_STUDENT');
export const signInAction = createActions('SIGN_IN');
export const clearAuthErrorAction = createActions('CLEAR_AUTH_ERROR');
export const checkUserAuthAction = createActions('CHECK_USER_AUTH');

export const createFacultyAction = createActions('CREATE_FACULTY');
export const clearFacultyStatusMessageAction = createActions('CLEAR_FACULTY_STATUS_MESSAGE');
export const getListOfFacultiesAction = createActions('GET_LIST_OF_FACULTIES');
export const deleteFacultyAction = createActions('DELETE_FACULTY');
export const clearFacultyDeleteStatusAction = createActions('CLEAR_FACULTY_DELETE_STATUS');
