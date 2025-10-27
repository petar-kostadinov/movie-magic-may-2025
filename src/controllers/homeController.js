import express from 'express';
import movieService from '../services/movieService.js';

const homecontroller = express.Router();

homecontroller.get('/', (req, res) => {
    const movies = movieService.getAll();

    res.render('home', { movies });
});

homecontroller.get('/about', (req, res) => {
    res.render('about');
});

export default homecontroller;