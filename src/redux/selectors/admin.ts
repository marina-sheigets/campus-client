import type { RootState } from '../reducers/rootReducer';

export const getStudentStatus = (state: RootState) => state.students.status;

export const getFacultyStatusMessage = (state: RootState) =>
    state.faculty.status;
export const getListOfFaculties = (state: RootState) =>
    state.faculty.facultiesList;
export const getFacultyDeleteStatusMessage = (state: RootState) =>
    state.faculty.deleteStatus;

export const getCathedraStatusMessage = (state: RootState) =>
    state.cathedra.status;
export const getListOfCathedras = (state: RootState) =>
    state.cathedra.cathedrasList;
export const getCathedraDeleteStatusMessage = (state: RootState) =>
    state.cathedra.deleteStatus;
