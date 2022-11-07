import { Secret, sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as Secret;

const generateToken = (email: string) => {
	const jwtToken = sign({ email }, JWT_SECRET, {
		expiresIn: '2h',
	});
	return jwtToken;
};

const verifyToken = (jwtToken: string) => {
	const validToken = verify(jwtToken, JWT_SECRET);
	return validToken;
};

export { generateToken, verifyToken };
