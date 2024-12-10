import mongoose from 'mongoose';
import { BloodType } from './request.js';
import { randomUUID } from 'crypto';

const userSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        default: () => randomUUID()
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: false,
        enum: BloodType
    },
    isHospital: {
        type: Boolean,
        required: true,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

export default User;
