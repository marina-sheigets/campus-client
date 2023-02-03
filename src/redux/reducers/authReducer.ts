import { clearAuthErrorAction, signInAction } from '../api/ApiActions';
import { Student, Teacher } from '../types/auth';

type InitialState = {
	user: Student | Teacher | {};
	authError: string;
	isAuth: boolean;
};
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
