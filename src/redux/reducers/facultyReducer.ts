import { AnyAction } from '@reduxjs/toolkit';
import {
	createFacultyAction,
	clearFacultyStatusMessageAction,
	getListOfFacultiesAction,
	deleteFacultyAction,
	clearFacultyDeleteStatusAction,
} from '../api/ApiActions';
import { Faculty, FacultyResponse } from '../types/faculty';

type InitialState = {
	status: string;
	facultiesList: Faculty[];
	deleteStatus: string;
};
const initialState: InitialState = {
	status: '',
	facultiesList: [],
	deleteStatus: '',
};

const facultyReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case createFacultyAction.type.REQUEST: {
			return {
				...state,
				status: 'Started',
			};
		}

		case createFacultyAction.type.SUCCESS: {
			if (action.payload.data.message) {
				return {
					...state,
					status: action.payload.data.message,
				};
			}
			return {
				...state,
				status: 'Faculty was created successfully !',
			};
		}

		case createFacultyAction.type.FAILED: {
			return {
				...state,
				status: 'Something went wrong. Try again !',
			};
		}

		case clearFacultyStatusMessageAction.type.REQUEST: {
			return {
				...state,
				status: '',
			};
		}

		case getListOfFacultiesAction.type.SUCCESS: {
			if (!action.payload.faculties.length) {
				return state;
			}
			const arr: Faculty[] = [];
			action.payload.faculties.forEach((faculty: FacultyResponse) => {
				arr.push({
					id: faculty._id,
					name: faculty.name,
					abbreviation: faculty.abbreviation,
				});
			});
			return { ...state, facultiesList: arr };
		}

		case deleteFacultyAction.type.REQUEST: {
			return {
				...state,
				deleteStatus: 'Started',
			};
		}

		case deleteFacultyAction.type.SUCCESS: {
			const { _id, name } = action.payload.faculty;
			const filteredFaculties = state.facultiesList.filter(
				(faculty: Faculty) => faculty.id !== _id
			);
			return {
				...state,
				facultiesList: filteredFaculties,
				deleteStatus: `Faculty "${name}" was successfully deleted ! `,
			};
		}
		case deleteFacultyAction.type.FAILED: {
			return {
				...state,
				deleteStatus: `Faculty was not deleted. Try again !`,
			};
		}
		case clearFacultyDeleteStatusAction.type.REQUEST: {
			return {
				...state,
				deleteStatus: '',
			};
		}

		default: {
			return state;
		}
	}
};

export default facultyReducer;
