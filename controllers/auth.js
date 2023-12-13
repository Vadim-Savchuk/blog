import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';

import User from '../models/User.js';

import { getNameFromEmail } from '../utils/funtions.js';

// Register
export async function register(request, response) {
    try {
        const { email, password, avatar } = request.body;

        const isUsed = await User.findOne({ email });

        if (isUsed) {
            return response.status(402).json({
                message: 'Такий користувач вже існує'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            email,
            password: hash,
            avatar,
            username: getNameFromEmail(email),
        });

        const token = jwt.sign(
            { id: newUser._id, },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        );

        await newUser.save();

        return response.status(201).json({
            token,
            newUser,
            message: 'Реєстрація пройшла успішно'
        });

    } catch (error) {
        return response.status(500).json({
            message: 'Помилка при створені користувача',
        });
    }
}

// Login
export async function login(request, response) {
    try {
        const { email, password } = request.body;

        const user = await User.findOne({ email });

        if (!user) {
            return response.status(404).json({
                message: 'Такий користувач не знайдений'
            });
        }

        const isPasswordCorect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorect) {
            return response.json({
                message: 'Невірний пароль',
            });
        }

        const token = jwt.sign(
            { id: user._id, },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        );

        return response.json({
            user,
            token,
            message: 'Ви авторизувались',
        })

    } catch (error) {
        return response.status(500).json({
            message: 'Помилка при авторизації',
        });
    }
}

// Get me
export async function getMe(request, response) {
    try {
        const user = await User.findById(request.userId);

        if (!user) {
            return response.status(404).json({
                message: 'Такий користувач не знайдений'
            });
        }

        const token = jwt.sign(
            { id: user._id, },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        );

        return response.json({
            user,
            token,
        });

    } catch (error) {
        return response.status(500).json({
            message: 'Помилка при отримані користувача',
        });
    }
}