export interface CreateSpecialtyType {
    name: string;
    number: string;
}

export interface Specialty {
    id: string;
    name: string;
    number: string;
}

export interface SpecialtyResponse {
    number: string;
    name: string;
    __v: number;
    _id: string;
}
