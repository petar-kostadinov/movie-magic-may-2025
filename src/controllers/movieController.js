import express from 'express'
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';

const moviecontroller = express.Router();

moviecontroller.get('/create', (req, res) => {
    res.render('create');
});

moviecontroller.post('/create', async (req, res) => {
    const userId = req.user.id;

    const newMovie = req.body;

    await movieService.create(newMovie, userId);

    res.redirect('/');
});

moviecontroller.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;

    const userId = req.user?.id;

    const movie = await movieService.getOne(movieId);

    const isOwner = movie.owner?.equals(userId);

    res.render('movie/details', { movie, isOwner });
});

moviecontroller.get('/search', async (req, res) => {

    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter });
})

moviecontroller.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    const casts = await castService.getAll({ exclude: movie.casts });

    res.render('movie/attach', { movie, casts });
});

moviecontroller.post('/:movieId/attach', async (req, res) => {

    const movieId = req.params.movieId;


    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);

});

moviecontroller.get('/:movieId/delete', async (req, res) => {

    const movieId = req.params.movieId;

    await movieService.delete(movieId);

    res.redirect('/');

});

moviecontroller.get('/:movieId/edit', async (req, res) => {

    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    res.render('movie/edit', { movie });
});

export default moviecontroller;