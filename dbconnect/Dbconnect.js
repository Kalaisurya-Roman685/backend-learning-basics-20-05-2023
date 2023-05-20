import mongoose from "mongoose";



const Connect = async (req, res) => {
    try {
        const connectdb = mongoose.connect(process.env.MONGOOSE_URL).then((res) => {
            console.log("DB Connected.")
        }).catch((err) => {
            console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
}


export default Connect;