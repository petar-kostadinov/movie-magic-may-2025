import express from 'express'
import movieService from '../services/movieService.js';

const moviecontroller = express.Router();

moviecontroller.get('/create', (req, res) => {
    res.render('create');
});

moviecontroller.post('/create', (req, res) => {
    const newMovie = req.body;
    
    movieService.create(newMovie);

    res.redirect('/');
});

export default moviecontroller;