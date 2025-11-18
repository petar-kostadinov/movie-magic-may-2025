import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import { validate } from "uuid";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid Email Format']
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', async function () {
    //const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, 10);
})

const User = model('User', userSchema);

export default User;