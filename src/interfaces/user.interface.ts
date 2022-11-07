import { Auth } from './auth.interface';

export interface User extends Auth {
	age: string;
	dni: string;
	name: string;
	phone: string;
	role: string;
}
