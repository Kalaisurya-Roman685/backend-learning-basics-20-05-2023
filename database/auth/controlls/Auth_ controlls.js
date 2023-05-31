import { PasswordCheck, PasswordCreate } from "../../../middleware/passwordbcrpt/PasswordGenrate.js";
import { Tokengenrate } from "../../../middleware/tokengenrate/TokenCreate.js";
import auth_schema from "../models/auth_schema.js";
import nodemailer from 'nodemailer';


export const AuthRegister = async (req, res) => {

    const { username, email, password } = req.body;


    try {

        const existemail = await auth_schema.findOne({ email });
        if (existemail) {
            return res.status(404).json("Email Already Exist");
        }
        const hashed = await PasswordCreate(password);
        const createUser = await auth_schema({
            username,
            email,
            password: hashed,

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


        // var smtpTransport = nodemailer.createTransport("SMTP", {
        //     service: "Gmail",
        //     auth: {
        //         user: 'kalai@cdp360.com', // generated ethereal user
        //         pass: 'kalairoman', // generated ethereal password
        //     }
        // });


        // let mailOptions = await transporter.sendMail({
        //     from: "kalai@cdp360.com", // sender address
        //     to: req.body.email, // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        // });

        // smtpTransport.sendMail(mailOptions, function (error, response) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         res.status(200).json("Email Send Successfully")
        //     }
        // });
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




