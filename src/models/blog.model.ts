import { Schema, model } from 'mongoose';
import { Blog } from '../interfaces/blog.interface';

const BlogSchema = new Schema<Blog>(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		email_author: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: false,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const BlogModel = model('blogs', BlogSchema);

export default BlogModel;
