export interface CreateCathedraType {
    name: string;
    abbreviation: string;
    facultyName: string;
}

export interface Cathedra {
    id: string;
    name: string;
    abbreviation: string;
    faculty: string;
}

export interface CathedraResponse {
    faculty: string;
    abbreviation: string;
    name: string;
    __v: number;
    _id: string;
}
