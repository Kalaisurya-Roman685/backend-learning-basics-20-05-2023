import { PasswordCheck, PasswordCreate } from "../../../middleware/passwordbcrpt/PasswordGenrate.js";
import { Tokengenrate } from "../../../middleware/tokengenrate/TokenCreate.js";
import auth_schema from "../models/auth_schema.js";



export const AuthRegister = async (req, res) => {

    const { username, email, password } = req.body;

    console.log(req.body)

    try {

        const existemail = await auth_schema.findOne({ email });
        if (existemail) {
            return res.status(404).json("Email Already Exist");
        }
        const hashed = await PasswordCreate(password);
        const createUser = await auth_schema({
            username,
            email,
            password: hashed
        })

        await createUser.save();
        res.status(201).json(createUser)
    }
    catch (err) {
        res.status(404).json("Register Error")
    }

}



export const AuthLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existemail = await auth_schema.findOne({ email });
        if (existemail) {
            const hashed = await PasswordCheck(password, existemail?.password);
            if (hashed) {
                const Tokens = await Tokengenrate(existemail?._id)
                const { password, ...otherdetails } = existemail._doc;
                const response = {
                    token: Tokens,
                    users: otherdetails
                }
                res.status(200).json(response)
            }
            else {

                res.status(404).json("Password Not Matched")
            }
        }
        else {
            return res.status(404).json("Email Already Exist");
        }


    }
    catch (err) {
        res.status(404).json("Register Error")
    }

}




