import Bikearea_shema from "../models/Bikearea_shema.js";



// create
export const BikeAreacreate = async (req, res) => {

    const { title, selectoptions, userId } = req.body;

    try {

        if (req.body.userId == req.userId) {
            const createArea = await Bikearea_shema({
                title, selectoptions, userId
            })
            await createArea.save().then((data) => {
                res.status(201).json(data);
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            res.status(404).json("User Id Not Maching")
        }

    }
    catch (err) {
        res.status(404).json("Bike Area Create Error")
    }
}

// edit

export const BikeAreaedit = async (req, res) => {
    const id = req.body.bikeid;
    try {

        if (req.body.userId == req.userId) {
            const updatebikes = await Bikearea_shema.findByIdAndUpdate(id, {
                title: req.body.title,
                selectoptions: req.body.selectoptions,
                userId: req.body.userId
            }, { new: true })
            res.status(201).json("Update Bike Edit");
        }
        else {
            res.status(404).json("User Id Not Maching")
        }

    }
    catch (err) {
        res.status(404).json("Bike Area Create Error")
    }
}

// single bike area

export const BikeAreasingle = async (req, res) => {
    const id = req.body.bikeid;
    try {

        if (req.body.userId == req.userId) {
            const updatebikes = await Bikearea_shema.findById(id);

            res.status(201).json(updatebikes);
        }
        else {
            res.status(404).json("User Id Not Maching")
        }

    }
    catch (err) {
        res.status(404).json("Bike Area Create Error")
    }
}

// over all bike area

export const BikeAreaAllarea = async (req, res) => {

    try {

        if (req.body.userId == req.userId) {
            const updatebikes = await Bikearea_shema.find();
            res.status(200).json(updatebikes);
        }
        else {
            res.status(404).json("User Id Not Maching")
        }

    }
    catch (err) {
        res.status(404).json("Bike Area Create Error")
    }
}

// find user

export const BikeAreaAllfinduser = async (req, res) => {

    try {

        if (req.body.userId == req.userId) {
            const updatebikes = await Bikearea_shema.find({ userId: req.body.userId });
            res.status(200).json(updatebikes);
        }
        else {
            res.status(404).json("User Id Not Maching")
        }

    }
    catch (err) {
        res.status(404).json("Bike Area Create Error")
    }
}