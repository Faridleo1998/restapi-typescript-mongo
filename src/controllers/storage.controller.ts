import { Response } from 'express';
import { RequestExtend } from '../interfaces/request.interface';
import { Storage } from '../interfaces/storage.interface';
import { createRecordUpload } from '../services/storage.service';
import { handleHttp } from '../utils/error.handle';

const postFile = async (req: RequestExtend, res: Response) => {
	try {
		const { user, file } = req;
		const dataToRegister: Storage = {
			fileName: `${file?.filename}`,
			emailUser: user?.email,
			path: `${file?.path}`,
		};
		const response = await createRecordUpload(dataToRegister);
		res.status(200).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_FILE');
	}
};

export { postFile };
