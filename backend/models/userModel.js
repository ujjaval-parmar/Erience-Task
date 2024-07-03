import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    profilePic:{
        type: String,
        required: true
    }

}, { timestamps: true });

const UserModel =   mongoose.model('user', UserSchema);

export default UserModel;