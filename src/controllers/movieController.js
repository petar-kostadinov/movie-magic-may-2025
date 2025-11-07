import express from 'express'
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';

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

    const casts = await movieService.getCasts(movieId);

    res.render('movie/details', { movie, casts });
});

moviecontroller.get('/search', async (req, res) => {

    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter });
})

moviecontroller.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    const casts = await castService.getAll();

    res.render('movie/attach', { movie, casts });
});

moviecontroller.post('/:movieId/attach', async (req, res) => {
    
    const movieId = req.params.movieId;

        
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
    
});

export default moviecontroller;