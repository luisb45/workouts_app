import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// router.patch();   update posts
// router.delete();  delete posts
// router.patch();   like posts 


export default router;