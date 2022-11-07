import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const removeFileNameExtension = (fileName: string) => {
	const file = fileName.split('.').shift();
	return file;
};

readdirSync(PATH_ROUTER).filter(filename => {
	const fileNameWhitoutExtension = removeFileNameExtension(filename);
	if (fileNameWhitoutExtension !== 'index') {
		import(`./${fileNameWhitoutExtension}`).then(moduleRoute => {
			router.use(`/${fileNameWhitoutExtension}`, moduleRoute.router);
		});
	}
});

export { router };
