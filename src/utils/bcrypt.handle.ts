import { hash, compare } from 'bcrypt';

const encrypt = async (passwordPlainText: string) => {
	const passwordHash = await hash(passwordPlainText, 8);
	return passwordHash;
};

const verified = async (passwordPlainText: string, passwordHash: string) => {
	const match = await compare(passwordPlainText, passwordHash);
	return match;
};

export { encrypt, verified };
