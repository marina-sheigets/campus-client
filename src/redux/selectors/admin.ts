import { RootState } from '../reducers/rootReducer';

export const getStudentStatus = (state: RootState) => state.students.status;

export const getFacultyStatusMessage = (state: RootState) => state.faculty.status;

export const getListOfFaculties=(state:RootState)=>state.faculty.facultiesList;

export const getFacultyDeleteStatusMessage=(state:RootState)=>state.faculty.deleteStatus;
