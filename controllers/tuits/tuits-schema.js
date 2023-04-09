import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    username: String,
    handle: String,
    image: String,
    topic: String,
    time: String,
},
    {collection: 'tuits'});
export default tuitsSchema;