import { Request } from 'express';
import multer, { diskStorage } from 'multer';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
	destination(
		req: Request,
		file: Express.Multer.File,
		cb: DestinationCallback
	) {
		cb(null, PATH_STORAGE);
	},
	filename(req: Request, file: Express.Multer.File, cb: FileNameCallback) {
		const ext = file.originalname.split('.').pop();
		const fileNameRandom = `image-${Date.now()}.${ext}`;
		cb(null, fileNameRandom);
	},
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
