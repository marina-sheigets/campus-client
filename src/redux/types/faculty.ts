export type CreateFacultyType = {
	name: string;
	abbreviation: string;
};

export type Faculty = {
	id: string;
	name: string;
	abbreviation: string;
};

export type FacultyResponse = {
	abbreviation: string;
	name: string;
	__v: number;
	_id: string;
};
