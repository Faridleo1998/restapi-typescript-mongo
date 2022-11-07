import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
	{
		age: {
			type: String,
			required: true,
		},
		dni: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			enum: ['admin', 'user'],
		},
	},
	{
		timestamps: true, //create automatic create and update date
		versionKey: false, // not create version field
	}
);

const UserModel = model('users', UserSchema);

export default UserModel;
