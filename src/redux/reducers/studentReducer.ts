import { createStudentAction } from '../api/ApiActions';

const initialState = {};

const studentReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case createStudentAction.type.SUCCESS: {
			console.log(action.payload);
			return state;
		}
		case createStudentAction.type.FAILED: {
			console.log(action.payload);
			return state;
		}
		default: {
			return state;
		}
	}
};

export default studentReducer;
