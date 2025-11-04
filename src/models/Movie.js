import { Schema, model } from "mongoose";


const movieShema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
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

