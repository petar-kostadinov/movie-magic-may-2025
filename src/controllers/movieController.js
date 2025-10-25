import express from 'express'

const moviecontroller = express.Router();

moviecontroller.get('/create', (req, res) => {
    res.render('create');
});

moviecontroller.post('/create', (req, res) => {
    const newMovie = req.body;
})

export default moviecontroller;