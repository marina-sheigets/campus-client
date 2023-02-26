export interface CreateFacultyType {
    name: string;
    abbreviation: string;
}

export interface Faculty {
    id: string;
    name: string;
    abbreviation: string;
}

export interface FacultyResponse {
    abbreviation: string;
    name: string;
    __v: number;
    _id: string;
}
