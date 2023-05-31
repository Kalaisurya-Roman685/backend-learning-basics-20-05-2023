import mongoose from "mongoose";


const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    })


export default mongoose.model("Auth", AuthSchema);