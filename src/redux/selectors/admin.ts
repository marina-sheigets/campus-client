import { RootState } from '../reducers/rootReducer';

export const getStudentStatus = (state: RootState) => state.students.status;
