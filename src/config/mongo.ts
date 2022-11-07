import 'dotenv/config';
import { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
	try {
		const DB_URI_MONGO = <string>process.env.DB_URI_MONGO;
		await connect(DB_URI_MONGO);
	} catch (error) {
		console.log(error);
	}
}

export default dbConnect;
