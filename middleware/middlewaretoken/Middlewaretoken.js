import JWT from 'jsonwebtoken';


export const MiddlewareCheck = async (req, res, next) => {
    try {
        const decods = await JWT.verify(req.headers.authorization, process.env.TOKEN, ((err, res) => {
            if (err) {
                res.status(404).josn("something")
            }
            else {
                console.log(res);
                if (res?._id) {
                    req.userId = res?._id;
                    next();

                }
                else {
                    res.status(404).josn("something")
                }

            }
        }));
    }
    catch (err) {
        res.status(404).json("User Token Missing Error")
    }
}