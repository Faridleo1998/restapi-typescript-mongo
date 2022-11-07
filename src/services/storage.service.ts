import { Storage } from '../interfaces/storage.interface';
import StorageModel from '../models/storage.model';

const createRecordUpload = async ({ fileName, emailUser, path }: Storage) => {
	const response = StorageModel.create({ fileName, emailUser, path });
	return response;
};

export { createRecordUpload };
