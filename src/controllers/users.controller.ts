import { Request, Response } from 'express';
import {
	createUser,
	getAllUsers,
	getOneUser,
	updateOneUser,
	deleteOneUser,
} from '../services/user.service';
import { handleHttp } from '../utils/error.handle';

const getUsers = async (req: Request, res: Response) => {
	try {
		const response = await getAllUsers();
		res.status(200).send(response.length > 0 ? response : 'NO_DATA');
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_USERS');
	}
};

const getUser = async ({ params }: Request, res: Response) => {
	try {
		const { dni } = params;
		const response = await getOneUser(dni);
		res.status(200).send(response ? response : 'NOT_FOUND');
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_USER');
	}
};

const postUser = async ({ body }: Request, res: Response) => {
	try {
		const response = await createUser(body);
		res.status(202).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_POST_USER');
	}
};

const updateUser = async ({ body, params }: Request, res: Response) => {
	try {
		const { dni } = params;
		const response = await updateOneUser(dni, body);
		res.status(200).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_UPDATE_USER');
	}
};

const deleteUser = async ({ params }: Request, res: Response) => {
	try {
		const { dni } = params;
		const response = await deleteOneUser(dni);
		res.status(200).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_DELETE_USER');
	}
};

export { getUser, getUsers, postUser, updateUser, deleteUser };
