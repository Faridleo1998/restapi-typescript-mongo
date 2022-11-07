import { Router } from 'express';
import { postFile } from '../controllers/storage.controller';
import multerMiddleware from '../middlewares/file.middleware';
import { checkJwt } from '../middlewares/session.middleware';

const router = Router();

router.post('/', checkJwt, multerMiddleware.single('file'), postFile);

export { router };
