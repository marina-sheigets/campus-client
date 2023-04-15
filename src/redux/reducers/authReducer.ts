import {
    automaticLogOutAction,
    checkUserAuthAction,
    clearAuthErrorAction,
    logOutAction,
    restorePasswordAction,
    signInAction,
} from '../api/ApiActions';
import type { Student, Teacher } from '../types/auth';

interface InitialState {
    user: Student | Teacher | Record<string, unknown>;
    authError: string;
    isAuth: boolean;
    isAuthInProgress: boolean;
    restoreMessage: string;
}
const initialState: InitialState = {
    user: {},
    authError: '',
    isAuth: false,
    restoreMessage: '',
    isAuthInProgress: !!localStorage.getItem('token'),
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case signInAction.type.SUCCESS: {
            if (action.payload.success) {
                localStorage.setItem('token', action.payload.data.accessToken);
                return {
                    ...state,
                    restoreMessage: '',
                    user: action.payload.data.user,
                    isAuth: true,
                };
            }
            return {
                ...state,
                restoreMessage: '',
                authError: action.payload.data.message,
                isAuthInProgress: false,
            };
        }
        case signInAction.type.FAILED: {
            return {
                ...state,
                restoreMessage: '',
                authError: 'Something went wrong',
                isAuthInProgress: false,
            };
        }

        case checkUserAuthAction.type.FAILED: {
            return {
                ...state,
                restoreMessage: '',
                authError: 'Session is expired. Sign in again',
                isAuthInProgress: false,
            };
        }

        case clearAuthErrorAction.type.REQUEST: {
            return {
                ...state,
                authError: '',
                restoreMessage: '',
            };
        }

        case logOutAction.type.REQUEST: {
            return {
                ...state,
                authError: '',
                isAuth: false,
            };
        }

        case restorePasswordAction.type.SUCCESS: {
            return {
                ...state,
                restoreMessage:
                    action.payload.data.message ?? 'Something went wrong',
            };
        }

        case restorePasswordAction.type.FAILED: {
            return {
                ...state,
                restoreMessage:
                    action.payload.message ?? 'Something went wrong',
            };
        }

        case automaticLogOutAction.type.REQUEST: {
            return {
                ...state,
                isAuth: false,
                authError: 'Session is expired. Sign in again',
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
