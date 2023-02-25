export type CreateCathedraType = {
	name: string;
	abbreviation: string;
	facultyName: string;
};

export type Cathedra = {
	id: string;
	name: string;
	abbreviation: string;
	faculty: string;
};

export type CathedraResponse = {
	faculty: string;
	abbreviation: string;
	name: string;
	__v: number;
	_id: string;
};
