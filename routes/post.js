import { Router } from "express";

import { checkAuth } from "../utils/checkAuth.js";

import { createPost, getAllPosts, getPostById, getAllUserPosts, getPostsByTag, getAllTags } from "../controllers/post.js";

const router = new Router();

// Create post
// http://localhost:????/api/post/create
router.post('/create', checkAuth, createPost);

// Get all posts
// http://localhost:????/api/post/
router.get('/', getAllPosts);

// Get post by id
// http://localhost:????/api/post/:id
router.get('/:id', getPostById);

// Get all user posts
// http://localhost:????/api/post/user/posts
router.get('/user/posts', checkAuth, getAllUserPosts);

// Get posts by tags 
// http://localhost:????/api/post/tags/list
router.get('/tags/list', getPostsByTag);

// Get all tags 
// http://localhost:????/api/post/list/tags
router.get('/list/tags', getAllTags);

export default router;