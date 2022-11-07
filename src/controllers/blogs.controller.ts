import { Request, Response } from 'express';
import { createBlog, getAllBlogs } from '../services/blog.service';
import { handleHttp } from '../utils/error.handle';

const getBlog = (req: Request, res: Response) => {
	try {
		res.status(200).send('get blog...');
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_BLOG');
	}
};

const getBlogs = async (req: Request, res: Response) => {
	try {
		const response = await getAllBlogs();
		res.status(200).send(response.length > 0 ? response : 'NOT_BLOGS');
	} catch (error) {
		handleHttp(res, error, 'ERROR_GET_BLOGS');
	}
};

const postBlog = async ({ body }: Request, res: Response) => {
	try {
		const response = await createBlog(body);
		res.status(202).send(response);
	} catch (error) {
		handleHttp(res, error, 'ERROR_POST_BLOG');
	}
};

const updateBlog = (req: Request, res: Response) => {
	try {
		res.status(200).send('update blog...');
	} catch (error) {
		handleHttp(res, error, 'ERROR_UPDATE_BLOG');
	}
};

const deleteBlog = (req: Request, res: Response) => {
	try {
		res.status(200).send('delete blog...');
	} catch (error) {
		handleHttp(res, error, 'ERROR_DELETE_BLOG');
	}
};

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog };
