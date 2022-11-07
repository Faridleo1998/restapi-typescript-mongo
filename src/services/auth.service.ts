import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({
	age,
	dni,
	email,
	name,
	password,
	phone,
	role,
}: User) => {
	const existUser = await UserModel.findOne({ email });
	if (existUser) return 'ALREADY_USER_EXIST';

	const passwordHash = await encrypt(password);
	const response = UserModel.create({
		age,
		dni,
		email,
		name,
		password: passwordHash,
		phone,
		role,
	});
	return response;
};

const loginUser = async ({ email, password }: Auth) => {
	const existUser = await UserModel.findOne({ email });
	if (!existUser) return 'EMAIL_OR_PASSWORD_INCORRECT';

	const passwordHash = existUser.password;
	const passwordIsCorrect = await verified(password, passwordHash);

	if (!passwordIsCorrect) return 'EMAIL_OR_PASSWORD_INCORRECT';

	const token = generateToken(existUser.email);

	const dataResponse = {
		token,
		email: existUser.email,
		dni: existUser.dni,
	};
	return dataResponse;
};

export { registerNewUser, loginUser };
