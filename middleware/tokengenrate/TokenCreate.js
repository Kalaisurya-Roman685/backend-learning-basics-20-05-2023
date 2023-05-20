import Jwt from "jsonwebtoken";

export const Tokengenrate = async (id) => {
    return Jwt.sign({ _id: id }, process.env.TOKEN, { expiresIn: "3d" })
}