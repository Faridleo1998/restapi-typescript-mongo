import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const getAllUsers = async () => {
	const response = await UserModel.find({});
	return response;
};

const getOneUser = async (dni: string) => {
	const response = await UserModel.findOne({ dni: dni });
	return response;
};

const createUser = async (user: User) => {
	const response = await UserModel.create(user);
	return response;
};

const updateOneUser = async (dni: string, data: User) => {
	const response = await UserModel.findOneAndUpdate({ dni }, data, {
		new: true,
	});
	return response;
};

const deleteOneUser = async (dni: string) => {
	const response = await UserModel.remove({ dni });
	return response;
};

export { getAllUsers, getOneUser, createUser, updateOneUser, deleteOneUser };
