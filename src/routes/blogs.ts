import { Router } from 'express';
import {
	deleteBlog,
	getBlog,
	getBlogs,
	postBlog,
	updateBlog,
} from '../controllers/blogs.controller';

const router = Router();

router
	.get('/', getBlogs)
	.get('/:id', getBlog)
	.post('/', postBlog)
	.put('/:id', updateBlog)
	.delete('/:id', deleteBlog);

export { router };
