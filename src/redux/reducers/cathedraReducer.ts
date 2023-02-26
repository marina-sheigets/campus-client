import type { AnyAction } from '@reduxjs/toolkit';
import {
    createCathedraAction,
    getListOfCathedrasAction,
    deleteCathedraAction,
    clearCathedraStatusMessageAction,
    clearCathedraDeleteStatusAction,
} from '../api/ApiActions';
import type { CathedraResponse, Cathedra } from '../types/cathedra';

interface InitialState {
    status: string;
    cathedrasList: Cathedra[];
    deleteStatus: string;
}
const initialState: InitialState = {
    status: '',
    cathedrasList: [],
    deleteStatus: '',
};

const cathedraReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case createCathedraAction.type.REQUEST: {
            return {
                ...state,
                status: 'Started',
            };
        }

        case createCathedraAction.type.SUCCESS: {
            if (action.payload.data.message) {
                return {
                    ...state,
                    status: action.payload.data.message,
                };
            }
            return {
                ...state,
                status: 'Cathedra was created successfully !',
            };
        }

        case createCathedraAction.type.FAILED: {
            return {
                ...state,
                status: 'Something went wrong. Try again !',
            };
        }

        case clearCathedraStatusMessageAction.type.REQUEST: {
            return {
                ...state,
                status: '',
            };
        }

        case getListOfCathedrasAction.type.SUCCESS: {
            if (!action.payload.cathedras.length) {
                return state;
            }
            const arr: Cathedra[] = [];
            action.payload.cathedras.forEach((cathedra: CathedraResponse) => {
                arr.push({
                    id: cathedra._id,
                    name: cathedra.name,
                    abbreviation: cathedra.abbreviation,
                    faculty: cathedra.faculty,
                });
            });
            return { ...state, cathedrasList: arr };
        }
        case getListOfCathedrasAction.type.FAILED: {
            return state;
        }

        case deleteCathedraAction.type.REQUEST: {
            return {
                ...state,
                deleteStatus: 'Started',
            };
        }

        case deleteCathedraAction.type.SUCCESS: {
            const { _id, name } = action.payload.cathedra;
            const filteredCathedras = state.cathedrasList.filter(
                (cathedra: Cathedra) => cathedra.id !== _id
            );
            return {
                ...state,
                cathedrasList: filteredCathedras,
                deleteStatus: `Cathedra "${
                    name as string
                }" was successfully deleted ! `,
            };
        }
        case deleteCathedraAction.type.FAILED: {
            return {
                ...state,
                deleteStatus: 'Cathedra was not deleted. Try again !',
            };
        }
        case clearCathedraDeleteStatusAction.type.REQUEST: {
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

export default cathedraReducer;
