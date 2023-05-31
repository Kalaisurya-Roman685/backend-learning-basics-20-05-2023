import { MiddlewareCheck } from "../../../middleware/middlewaretoken/Middlewaretoken.js";
import Shop_schema from "../shopschema/Shop_schema.js";
import { ObjectId } from "mongoose";
export const BikeCreate = async (req, res) => {
    const {
        shopname,
        userId,
        bikename,
        image,
        amount,
        model,
        owner,
        mileage,
        kilometre
    } = req.body;
    try {

        const CreateBike = await Shop_schema({
            shopname,
            userId,
            bikename,
            image,
            amount,
            model,
            owner,
            mileage,
            kilometre
        });

        await CreateBike.save();

        res.status(201).json("Bike Created.")



    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}

// get Bike Shops userid Fecth

export const BikegetUserid = async (req, res) => {
    try {
        if (req.body.userId === req.userId) {
            const checkfilter = await Shop_schema.find({ userId: req.body.userId })
            res.status(200).json(checkfilter)
        }
        else {
            res.status(404).json("Bike User Id Missing")
        }

    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}


// get Bike Shops Single Fecth
export const BikegetSingle = async (req, res) => {
    const id = req.params.id;
    console.log(req.userId, "thalakalai------------")
    try {
        if (req.body.userId === req.userId) {
            const checkfilter = await Shop_schema.findById(id);
            res.status(200).json(checkfilter)
        }
        else {
            res.status(404).json("Bike User Id Missing")
        }

    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}


// all shops

export const BikegetAllshops = async (req, res) => {
    console.log(req?.query?.limit, "kalais")
    try {




        const checkfilter = await Shop_schema.find({ status: true });

        // console.log(req.userId, "userFind-----------------")
        res.status(200).json(checkfilter)



    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}


// delete shop
export const BikeDelete = async (req, res) => {
    const id = req.params.id;
    try {
        if (req.body.userId === req.userId) {
            const checkfilter = await Shop_schema.findByIdAndDelete(id);
            res.status(200).json("Bike Shop deleted")
        }
        else {
            res.status(404).json("Bike User Id Missing")

        }

    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}

// comments Box
export const BikeComments = async (req, res) => {
    const id = req.params.id;

    try {
        if (req.body.userId === req.userId) {
            const checkfilter = await Shop_schema.findByIdAndUpdate(id, {
                $push: { comments: req.body?.comments }
            }, {
                new: true
            });

            console.log(checkfilter)
            res.status(200).json(checkfilter)
        }
        else {
            res.status(404).json("Bike User Id Missing")
        }
    } catch (err) {
        res.status(404).json("Bike Create Error Something.")
    }
}

// all comments


export const BikeComentDelete = async (req, res) => {
    try {
        const post = await Shop_schema.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $pull: { comments: { _id: req.body.postId } },
            },
            { new: true }
        );

        // console.log(post, "post")

        if (!post) {
            return res.status(400).send("Post not found");
        }
        res.status(200).json("Comment Deleted Successfully")

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


// like

export const BikeLikePost = async (req, res) => {
    try {
        const postId = await Shop_schema.findById(req.params.id);

        if (req.body?.userId === req.userId) {
            if (!postId.like.includes(req.body.userId)) {
                await postId.updateOne({ $push: { like: req.body.userId } });
                return res.status(201).json("Post Like You..")
            }
            else {
                await postId.updateOne({ $pull: { like: req.body.userId } });
                return res.status(200).json("Post Unlike You..")

            }
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


// following

export const BikeFollowing = async (req, res) => {
    try {
        if (req.body?.userId !== req.params?.id) {
            const postIduser = await Shop_schema.findById(req.params.id);
            const otheruser = await Shop_schema.findById(req.body.userId);
            if (!postIduser.followers.includes(req.body.userId)) {
                await postIduser.findOneAndUpdate({ $push: { followers: req.body.userId } });
                await otheruser.findOneAndUpdate({ $push: { following: req.params.id } });
                res.status(201).json("User has Been follower..")
            }
            else {
                res.status(404).json("Your Already Follow User..")

            }
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

// var ms = new Date().getTime() +518400000 ;

// var tomorrow = new Date(ms);
// console.log(tomorrow);



