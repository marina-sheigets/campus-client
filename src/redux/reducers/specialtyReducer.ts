import type { AnyAction } from '@reduxjs/toolkit';
import {
    createSpecialtyAction,
    clearSpecialtyStatusMessageAction,
    getListOfSpecialtiesAction,
    deleteSpecialtyAction,
    clearSpecialtyDeleteStatusAction,
} from '../api/ApiActions';
import type { Specialty, SpecialtyResponse } from '../types/specialty';

interface InitialState {
    status: string;
    specialtiesList: Specialty[];
    deleteStatus: string;
}
const initialState: InitialState = {
    status: '',
    specialtiesList: [],
    deleteStatus: '',
};

const specialtyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case createSpecialtyAction.type.REQUEST: {
            return {
                ...state,
                status: 'Started',
            };
        }

        case createSpecialtyAction.type.SUCCESS: {
            if (action.payload.data.message) {
                return {
                    ...state,
                    status: action.payload.data.message,
                };
            }
            return {
                ...state,
                status: 'Specialty was created successfully !',
            };
        }

        case createSpecialtyAction.type.FAILED: {
            return {
                ...state,
                status: 'Something went wrong. Try again !',
            };
        }

        case clearSpecialtyStatusMessageAction.type.REQUEST: {
            return {
                ...state,
                status: '',
            };
        }

        case getListOfSpecialtiesAction.type.SUCCESS: {
            if (!action.payload.specialties.length) {
                return state;
            }
            const arr: Specialty[] = [];
            action.payload.specialties.forEach(
                (specialty: SpecialtyResponse) => {
                    arr.push({
                        id: specialty._id,
                        name: specialty.name,
                        number: specialty.number,
                    });
                }
            );
            return { ...state, specialtiesList: arr };
        }

        case deleteSpecialtyAction.type.REQUEST: {
            return {
                ...state,
                deleteStatus: 'Started',
            };
        }

        case deleteSpecialtyAction.type.SUCCESS: {
            const { _id, name } = action.payload.specialty;
            const filteredSpecialties = state.specialtiesList.filter(
                (specialty: Specialty) => specialty.id !== _id
            );
            return {
                ...state,
                specialtiesList: filteredSpecialties,
                deleteStatus: `Specialty "${
                    name as string
                }" was successfully deleted ! `,
            };
        }
        case deleteSpecialtyAction.type.FAILED: {
            return {
                ...state,
                deleteStatus: 'Specialty was not deleted. Try again !',
            };
        }
        case clearSpecialtyDeleteStatusAction.type.REQUEST: {
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

export default specialtyReducer;
