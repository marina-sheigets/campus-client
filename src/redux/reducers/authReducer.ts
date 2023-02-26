import {
    checkUserAuthAction,
    clearAuthErrorAction,
    signInAction,
} from '../api/ApiActions';
import type { Student, Teacher } from '../types/auth';

interface InitialState {
    user: Student | Teacher | Record<string, unknown>;
    authError: string;
    isAuth: boolean;
}
const initialState: InitialState = {
    user: {},
    authError: '',
    isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case signInAction.type.SUCCESS: {
            if (action.payload.success) {
                localStorage.setItem('token', action.payload.data.accessToken);
                return {
                    ...state,
                    user: action.payload.data.user,
                    isAuth: true,
                };
            }
            return { ...state, authError: action.payload.data.message };
        }
        case signInAction.type.FAILED: {
            return { ...state, authError: 'Something went wrong' };
        }

        case checkUserAuthAction.type.FAILED: {
            return { ...state, authError: 'Session is expired. Sign in again' };
        }

        case clearAuthErrorAction.type.REQUEST: {
            return {
                ...state,
                authError: '',
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
