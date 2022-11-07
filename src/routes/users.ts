import { Router } from 'express';
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from '../controllers/users.controller';

const router = Router();

router
	.get('/', getUsers)
	.get('/:dni', getUser)
	.put('/:dni', updateUser)
	.delete('/:dni', deleteUser);

export { router };
