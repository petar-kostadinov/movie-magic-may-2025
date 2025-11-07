import { Schema, model, Types } from "mongoose";


const movieShema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1970,
        max: new Date().getFullYear() + 5,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    description: {
        type: String,
        required: true,
        maxLength: [1000, 'Description is too long'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast',
    }],
});

const Movie = model('Movie', movieShema);

export default Movie;

//import fs from "node:fs/promises"
//import { v4 as uuid } from 'uuid'

//const moviesJson = await fs.readFile('./src/database.json');
//export const movies = JSON.parse(moviesJson);

//export default class Movie {
   // constructor(data) {
    //    this.data = data;
   // }

   //     async save() {
        
   //     this.data.id = uuid();

   //     this.data.rating = Number(this.data.rating);

  //      movies.push(this.data);

  //      await fs.writeFile('./src/database.json', JSON.stringify(movies, null, 4));

  //      return this.data;
  //  }
//}

