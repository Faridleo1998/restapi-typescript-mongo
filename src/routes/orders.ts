import { Router } from 'express';
import { getOrders } from '../controllers/orders.controller';
import { checkJwt } from '../middlewares/session.middleware';

const router = Router();

/*
	Solo se puede acceder a esta ruta si el usuario tiene un json web token valido
*/
router.get('/', checkJwt, getOrders);

export { router };
