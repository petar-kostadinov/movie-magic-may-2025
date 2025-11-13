import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        let query = Movie.find();

        //let result = await Movie.find({});

        if (filter.search) {
            //result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
            query = query.find({ title: { $regex: new RegExp(filter.search, 'i') } });
        }

        if (filter.genre) {
            //result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
            query = query.find({ genre: filter.genre.toLowerCase() });
        }

        if (filter.year) {
            //result = result.filter(movie => movie.year === filter.year);
            query = query.find({ year: filter.year });
        }

        return query;
    },
    create(movieData, userId) {
        const movie = new Movie(movieData);

        movie.owner = userId;

        return movie.save();
    },
    async getOne(movieId) {
        const movie = await Movie.findById(movieId).populate('casts');

        return movie;
    },

    async attach(movieId, castId) {
        const movie = await this.getOne(movieId);

        movie.casts.push(castId);

        return movie.save();
    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId);
    },
    update(movieId, movieData) {
        return Movie.findByIdAndUpdate(movieId, movieData);
    },
}