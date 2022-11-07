import { Blog } from '../interfaces/blog.interface';
import BlogModel from '../models/blog.model';

const getAllBlogs = async () => {
	const response = await BlogModel.find({});
	return response;
};

const createBlog = async (blog: Blog) => {
	const response = await BlogModel.create(blog);
	return response;
};

export { getAllBlogs, createBlog };
