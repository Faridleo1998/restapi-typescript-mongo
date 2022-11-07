import { NextFunction, Response } from 'express';
import { RequestExtend } from '../interfaces/request.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkJwt = (req: RequestExtend, res: Response, next: NextFunction) => {
	const headerAuthorization = req.headers.authorization || null;
	if (!headerAuthorization) return res.status(400).send('TOKEN_INVALID');

	const jwtTokenUser = headerAuthorization.split(' ').pop();
	try {
		const userDataPayload = verifyToken(`${jwtTokenUser}`) as {
			email: string;
		};
		req.user = userDataPayload;
		next();
	} catch (error) {
		return res.status(400).send('TOKEN_INVALID');
	}
};

export { checkJwt };
