import { Response } from 'express';
import { RequestExtend } from '../interfaces/request.interface';
import { handleHttp } from '../utils/error.handle';

const getOrders = async (req: RequestExtend, res: Response) => {
	try {
		res.status(200).send({
			message: 'Solo lo ve la persona con sesion / jwt valida',
			user: req.user,
		});
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_ORDERS');
	}
};

export { getOrders };
