import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: { type: Number, default: 0 },
    image: {type: String, default: "usericon.png"}
}, {collection: 'tuits'});
export default schema;