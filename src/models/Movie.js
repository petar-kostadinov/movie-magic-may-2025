import { Schema, model, Types } from "mongoose";
import { validate } from "uuid";

const maxYearAllowed = new Date().getFullYear() + 5;
const validCharactersPattern = /^[a-zA-Z0-9 ]+$/;

const movieShema = new Schema({
    title: {
        type: String,
        required: true,
        validate: [validCharactersPattern, 'Only english letters,digits and whitespace are allowed!'],
        minLength: [5, 'Title should be at least 5 characters long'],
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
            message: (props) => `${props.value} is not a valid category!`
        }
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        minLength: [5, 'Genre should be at least 5 characters long'],
        validate: [validCharactersPattern, 'Only english letters,digits and whitespace are allowed!'],
    },
    director: {
        type: String,
        required: true,
        minLength: [5, 'Director should be at least 5 characters long'],
        validate: [validCharactersPattern, 'Only english letters,digits and whitespace are allowed!'],
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Movie year cannot be less than 1900 year'],
        max: [maxYearAllowed, `Year cannot be larger than ${maxYearAllowed}`],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url i required'],
        validate: [/^https?:\/\//, 'Invalid image Url'],
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    description: {
        type: String,
        required: [true, 'Rating is required'],
        maxLength: [1500, 'Description is too long!'],
        minLength: [20, 'Descriptiion is too short!'],
        validate: [validCharactersPattern, 'Only english letters,digits and whitespace are allowed!'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
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

