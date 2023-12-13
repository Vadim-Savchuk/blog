import mongoose from "mongoose";

const PostScheme = new mongoose.Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        avatar: {
            type: String
        },
        about: {
            type: String
        },
        title: {
            type: String,
            require: true,
        },
        text: {
            type: String,
            require: true,
        },
        imgUrl: {
            type: String,
            default: 'https://molbert.com.ua/img/gallery/big/picture_13331_5244.jpg',
        },
        views: {
            type: Number,
            default: 0,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        tags: [
            {
                type: String,
            }
        ]
    },
    { timestamps: true },
)

export default mongoose.model('Post', PostScheme);