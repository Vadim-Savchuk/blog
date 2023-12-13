import Post from '../models/Post.js';
import User from '../models/User.js';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getArrayTags } from '../utils/funtions.js';

// Create post
export const createPost = async (request, response) => {
    try {
        const { title, text, tags } = request.body;

        const user = await User.findById(request.userId);

        const arrTags = tags.split(' ').map(tag => tag.trim());

        if (request.files) {
            let fileName = Date.now().toString() + request.files.image.name;

            const __dirname = dirname(fileURLToPath(import.meta.url))

            request.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const newPostWithImage = new Post({
                username: user.username,
                email: user.email,
                about: user.about,
                title,
                text,
                avatar: user.avatar,
                tags: arrTags,
                imgUrl: fileName,
                author: request.userId,
            });

            await newPostWithImage.save();

            await User.findByIdAndUpdate(request.userId, {
                $push: { posts: newPostWithImage }
            });

            return response.json(newPostWithImage);
        }

        const newPostWithoutImage = new Post({
            username: user.username,
            title,
            text,
            tags: arrTags,
            imgUrl: '',
            author: request.userId,
        });

        await newPostWithoutImage.save();
        await User.findByIdAndUpdate(request.userId, {
            $push: { posts: newPostWithoutImage }
        });

        return response.jsonn(newPostWithoutImage)

    } catch (error) {
        return response.json({
            message: 'Сталась помилка при спробі створити пост'
        });
    }
}

// Get all posts
export const getAllPosts = async (request, response) => {
    try {
        const posts = await Post.find().sort('-createdAt');

        const popularPosts = await Post.find().limit(4).sort('-views');

        if (!posts) {
            return response.json({
                message: 'Постів немає'
            });
        }

        return response.json({
            posts,
            popularPosts,
        })

    } catch (error) {
        return response.json({
            message: 'Сталась помилка при отримані постів'
        });
    }
}

// Get post by id
export const getPostById = async (request, response) => {
    try {
        const post = await Post.findByIdAndUpdate(request.params.id, {
            $inc: { views: 1 },
        });

        return response.json(post);
    } catch (error) {
        return response.json({
            message: 'Сталась помилка при отримані поста'
        });
    }
}

// Get all user posts
export const getAllUserPosts = async (request, response) => {
    try {
        const user = await User.findById(request.userId);

        const userPosts = await Promise.all(
            user.posts.map(post => {
                return Post.findById(post._id);
            })
        );

        return response.json(userPosts);
    } catch (error) {
        return response.json({
            message: 'Сталась помилка при отримані ваших постів'
        });
    }
}

// Get posts by tags 
export const getPostsByTag = async (request, response) => {
    try {
        const posts = await Post.find({ tags: request.query.tag });

        return response.json(posts)
    } catch (error) {
        return response.json({
            message: 'Сталась помилка таких тегів не знайдено'
        });
    }
}

// Get all tags
export const getAllTags = async (request, response) => {
    try {
        const posts = await Post.find();

        const tagsArray = getArrayTags(posts);

        return response.json(tagsArray)
    } catch (error) {
        return response.json({
            message: 'Сталась помилка при отримані тегів'
        });
    }
}