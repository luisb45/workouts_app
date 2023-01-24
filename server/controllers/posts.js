import mongoose from 'mongoose';
import PostExercise from '../models/postExercise.js';

export const getPosts = async (req, res) => {
   try {
        const postExercise = await PostExercise.find();

        res.status(200).json(postExercise);
   } catch (error) {
        res.status(404).json({ message: error.message });
   }
};

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostExercise(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};