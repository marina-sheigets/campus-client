export interface Student {
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
	yearOfAdmission: string;
	faculty: string;
	cathedra: string;
	specialty: string;
	group: string;
	type: string;
	isAdmin?: boolean;
}

export interface Teacher {
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
	yearOfEmployment: string;
	faculty: string;
	cathedra: string;
	curator: string;
	position: string;
	isAdmin?: boolean;
}

export interface Admin {
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
	isAdmin: boolean;
}
