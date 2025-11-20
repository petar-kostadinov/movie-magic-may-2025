import express from 'express'
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';
import { getCategoryOptionsViewData } from '../utils/movieUtils.js';
import { isAuth } from '../middleware/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const moviecontroller = express.Router();

moviecontroller.get('/create', isAuth, (req, res) => {
    res.render('movie/create', { pageTitle: 'Create' });
});

moviecontroller.post('/create', isAuth, async (req, res) => {
    const userId = req.user.id;

    const newMovie = req.body;
    try {
        await movieService.create(newMovie, userId);

        res.redirect('/');

    } catch (err) {

        const categoryOptionsViewData = getCategoryOptionsViewData(newMovie.category);

        res.render('movie/create', {
            pageTitle: 'Create',
            error: getErrorMessage(err),
            movie: newMovie,
            categoryOptions: categoryOptionsViewData,
        });
    }

});

moviecontroller.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;

    const userId = req.user?.id;

    const movie = await movieService.getOne(movieId);

    const isOwner = movie.owner?.equals(userId);

    res.render('movie/details', { movie, isOwner, pageTitle: 'Details' });
});

moviecontroller.get('/search', async (req, res) => {

    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter, pageTitle: 'Search' });
})

moviecontroller.get('/:movieId/attach', isAuth, async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    const casts = await castService.getAll({ exclude: movie.casts });

    res.render('movie/attach', { movie, casts, pageTitle: 'Attach' });
});

moviecontroller.post('/:movieId/attach', isAuth, async (req, res) => {

    const movieId = req.params.movieId;


    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);

});

moviecontroller.get('/:movieId/delete', isAuth, async (req, res) => {

    const movieId = req.params.movieId;

    await movieService.delete(movieId);

    res.redirect('/');

});

moviecontroller.get('/:movieId/edit', isAuth, async (req, res) => {

    const movieId = req.params.movieId;

    const userId = req.user?.id;

    const movie = await movieService.getOne(movieId);

    const isOwner = movie.owner?.equals(userId);

    if (!isOwner) {
        return res.status(403).end();
    }

    const categoryOptionsViewData = getCategoryOptionsViewData(movie.category);

    res.render('movie/edit', {
        movie,
        categoryOptions: categoryOptionsViewData,
        pageTitle: 'Edit'
    });
});

moviecontroller.post('/:movieId/edit', isAuth, async (req, res) => {

    const movieId = req.params.movieId;

    const movieData = req.body;

    //const userId = req.user?.id;

    await movieService.update(movieId, movieData);

    res.redirect(`/movies/${movieId}/details`);
});

export default moviecontroller;