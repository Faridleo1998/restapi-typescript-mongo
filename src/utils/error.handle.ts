import { Response } from 'express';

const handleHttp = (res: Response, error: unknown, message: string) => {
	res.status(500);
	res.send({ error, message });
};

export { handleHttp };
