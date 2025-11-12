import jsonwebtoken from 'jsonwebtoken';
import { jwSecret } from '../config/index.js';

export const auth = (req, res, next) => {

    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jsonwebtoken.verify(token, jwSecret);

        next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
};