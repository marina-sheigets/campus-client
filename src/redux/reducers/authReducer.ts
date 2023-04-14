import {
    checkUserAuthAction,
    clearAuthErrorAction,
    logOutAction,
    signInAction,
} from '../api/ApiActions';
import type { Student, Teacher } from '../types/auth';

interface InitialState {
    user: Student | Teacher | Record<string, unknown>;
    authError: string;
    isAuth: boolean;
    isAuthInProgress: boolean;
}
const initialState: InitialState = {
    user: {},
    authError: '',
    isAuth: false,
    isAuthInProgress: !!localStorage.getItem('token'),
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
            return {
                ...state,
                authError: action.payload.data.message,
                isAuthInProgress: false,
            };
        }
        case signInAction.type.FAILED: {
            return {
                ...state,
                authError: 'Something went wrong',
                isAuthInProgress: false,
            };
        }

        case checkUserAuthAction.type.FAILED: {
            return {
                ...state,
                authError: 'Session is expired. Sign in again',
                isAuthInProgress: false,
            };
        }

        case clearAuthErrorAction.type.REQUEST: {
            return {
                ...state,
                authError: '',
            };
        }

        case logOutAction.type.REQUEST: {
            return {
                ...state,
                isAuth: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
