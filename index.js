import express    from 'express';
import mongoose   from 'mongoose';
import dotenv     from 'dotenv';
import cors       from 'cors';
import fileUpload from 'express-fileupload';

import authRoute from './routes/auth.js';
import postRoute from './routes/post.js';

const app = express();
      dotenv.config();

// Constants
const PORT        = process.env.PORT || 3001;
const USERNAME    = process.env.DB_USERNAME;
const PASSWORD    = process.env.DB_PASSWORD;
const PROJECTNAME = process.env.DB_PROJECTNAME;

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

// Routes
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);


async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jywwcnv.mongodb.net/${PROJECTNAME}?retryWrites=true&w=majority`
        )

        app.listen(PORT, () => {
            console.log('Server and mongoDB started ')
        });
    } catch (error) {

    }
}

start();