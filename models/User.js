import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        username: {
            type: String,
            default: '',
        },
        about: {
            type: String,
            default: 'This author has not yet revealed anything about himself',
        },
        avatar: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvT6QqjdH2mTk0Zpf84FLHDMX77xUTonQ0g&usqp=CAU',
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            }
        ]
    },
    { timestamps: true },
)

export default mongoose.model('User', UserSchema);