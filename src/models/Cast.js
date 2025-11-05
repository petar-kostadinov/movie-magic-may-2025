import { Schema, model } from "mongoose";

const castShema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 12,
        max: 120,
    },
    born: {
        type: String,
        requred: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    }
});

const Cast = model('Cast', castShema);

export default Cast;