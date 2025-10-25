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

moviecontroller.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;

    const movie = movieService.getOne(movieId);

    res.render('details', { movie });
});

export default moviecontroller;