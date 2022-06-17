import { model, models, Schema } from "mongoose";

const postScheema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    postImage: {
        type: String || '',
        
    },
    email: {
        type: String, 
        required: true,
        
    }, 
    date: {
        type: String,
        required: true
    }
})

const Post = models.Post || model('Post', postScheema)
export default Post;