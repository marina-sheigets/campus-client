import { createActions } from '../../utils/actionCreator';

export const clearStudentStatusMessageAction = createActions(
    'CLEAR_STUDENT_STATUS_MESSAGE'
);
export const createStudentAction = createActions('CREATE_STUDENT');
export const getAllStudentsAction = createActions('GET_ALL_STUDENTS');
export const deleteStudentByIdAction = createActions('DELETE_STUDENT_BY_ID');

export const signInAction = createActions('SIGN_IN');
export const logOutAction = createActions('LOG_OUT');
export const automaticLogOutAction = createActions('AUTOMATIC_LOG_OUT');
export const clearAuthErrorAction = createActions('CLEAR_AUTH_ERROR');
export const checkUserAuthAction = createActions('CHECK_USER_AUTH');

export const createFacultyAction = createActions('CREATE_FACULTY');
export const clearFacultyStatusMessageAction = createActions(
    'CLEAR_FACULTY_STATUS_MESSAGE'
);
export const getListOfFacultiesAction = createActions('GET_LIST_OF_FACULTIES');
export const deleteFacultyAction = createActions('DELETE_FACULTY');
export const clearFacultyDeleteStatusAction = createActions(
    'CLEAR_FACULTY_DELETE_STATUS'
);

export const createCathedraAction = createActions('CREATE_CATHEDRA');
export const clearCathedraStatusMessageAction = createActions(
    'CLEAR_CATHEDRA_STATUS_MESSAGE'
);
export const getListOfCathedrasAction = createActions('GET_LIST_OF_CATHEDRAS');
export const deleteCathedraAction = createActions('DELETE_CATHEDRA');
export const clearCathedraDeleteStatusAction = createActions(
    'CLEAR_CATHEDRA_DELETE_STATUS'
);

export const createSpecialtyAction = createActions('CREATE_SPECIALTY');
export const clearSpecialtyStatusMessageAction = createActions(
    'CLEAR_SPECIALTY_STATUS_MESSAGE'
);
export const getListOfSpecialtiesAction = createActions(
    'GET_LIST_OF_SPECIALTIES'
);
export const deleteSpecialtyAction = createActions('DELETE_SPECIALTY');
export const clearSpecialtyDeleteStatusAction = createActions(
    'CLEAR_SPECIALTY_DELETE_STATUS'
);

export const createArticleAction = createActions('CREATE_ARTICLE');
export const editArticleAction = createActions('EDIT_ARTICLE');
export const clearArticleStatusMessageAction = createActions(
    'CLEAR_ARTICLE_STATUS_MESSAGE'
);
export const deleteEditingStatusAction = createActions('DELETE_EDITING_STATUS');
export const getListOfArticlesAction = createActions('GET_LIST_OF_ARTICLES');
export const deleteArticleAction = createActions('DELETE_ARTICLE');
export const clearArticleDeleteStatusAction = createActions(
    'CLEAR_ARTICLE_DELETE_STATUS'
);

export const restorePasswordAction = createActions('RESTORE_PASSWORD');
