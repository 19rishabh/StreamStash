import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: '15d'});
    res.cookie('jwt-StreamStash', token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true, //prevent XSS attacks 
        sameSite: "strict", //prevent CSRF attacks
        secure: ENV_VARS.NODE_ENV !== "development" // cookie will only be sent in http 
    });
    return token;
};
