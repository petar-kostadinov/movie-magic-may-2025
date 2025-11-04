import express from 'express'
import movieService from '../services/movieService.js';

const moviecontroller = express.Router();

moviecontroller.get('/create', (req, res) => {
    res.render('create');
});

moviecontroller.post('/create', async (req, res) => {
    const newMovie = req.body;

    await movieService.create(newMovie);

    res.redirect('/');
});

moviecontroller.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    res.render('details', { movie });
});

moviecontroller.get('/search', async (req, res) => {

    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter });
})

export default moviecontroller;