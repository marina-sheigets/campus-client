import {
    clearStudentStatusMessageAction,
    createStudentAction,
    getAllStudentsAction,
} from '../api/ApiActions';
import type { Student } from '../types/auth';

interface InitialState {
    status: string;
    studentsList: Student[];
}
const initialState: InitialState = {
    status: '',
    studentsList: [],
};

const studentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case createStudentAction.type.REQUEST: {
            return {
                ...state,
                status: 'Started',
            };
        }
        case createStudentAction.type.SUCCESS: {
            const { message } = action.payload.data;
            if (message) {
                return {
                    ...state,
                    status: message,
                };
            }
            return {
                ...state,
                status: 'Student was successfully created',
            };
        }
        case createStudentAction.type.FAILED: {
            return { ...state, errorMessage: '' };
        }
        case clearStudentStatusMessageAction.type.REQUEST: {
            return {
                ...state,
                status: '',
            };
        }
        case getAllStudentsAction.type.SUCCESS: {
            if (action.payload.students) {
                return {
                    ...state,
                    studentsList: action.payload.students,
                };
            }
            return {
                ...state,
                studentsList: [],
            };
        }
        default: {
            return state;
        }
    }
};

export default studentReducer;
