import {
    clearStudentStatusMessageAction,
    createStudentAction,
} from '../api/ApiActions';

const initialState = {
    status: '',
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
        default: {
            return state;
        }
    }
};

export default studentReducer;
