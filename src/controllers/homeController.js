import express from 'express';

const homecontroller = express.Router();

homecontroller.get('/', (req, res) => {
    res.render('home');
});

homecontroller.get('/about', (req, res) => {
    res.render('about');
});

export default homecontroller;