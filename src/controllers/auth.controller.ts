import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.service';
import { handleHttp } from '../utils/error.handle';

const register = async ({ body }: Request, res: Response) => {
	try {
		const response = await registerNewUser(body);
		res.status(200).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_REGISTER_USER');
	}
};

const login = async ({ body }: Request, res: Response) => {
	try {
		const { email, password } = body;
		const response = await loginUser({ email, password });
		response === 'EMAIL_OR_PASSWORD_INCORRECT'
			? res.status(403).send(response)
			: res.status(200).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_LOGIN_USER');
	}
};

export { login, register };
