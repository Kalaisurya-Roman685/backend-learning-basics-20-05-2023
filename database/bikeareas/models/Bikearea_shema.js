import mongoose from "mongoose";



const BikeArea = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,

    },
    selectoptions: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true
    });

export default mongoose.model("Bikeaddress", BikeArea);