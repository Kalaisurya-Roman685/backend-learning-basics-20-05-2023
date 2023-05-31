import mongoose from "mongoose";




const BikeShema = new mongoose.Schema({
    shopname: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    bikename: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    kilometre: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    like: {
        type: Array,
        default: [],
    },
    comments: [{
        description: {
            type: String,
            trim: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Auth'
        }
    }],
    status: {
        type: String,
        default: true
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})



export default mongoose.model("bike", BikeShema);