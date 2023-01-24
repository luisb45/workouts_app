import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    user: String,
    exercises: [String],
    exerciseType: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostExercise = mongoose.model('PostExercise', postSchema);

export default PostExercise;