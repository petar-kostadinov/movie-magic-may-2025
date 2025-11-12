import bcrypt from 'bcrypt'
import jsonWebToken from 'jsonwebtoken';

import User from "../models/User.js"
import { jwSecret } from '../config/index.js';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {

        const user = await User.findOne({ email });

        if (!user) {
            return new Error('No such user');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return new Error('Invalid password');
        }

        const payLoad = {
            id: user.id,
            email: user.email,
        };

        const token = jsonWebToken.sign(payLoad, jwSecret, { expiresIn: '2h' });

        return token;
    }
}