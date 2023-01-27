const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('./../models/user');

async function isLoggedIn(req,res,next){
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(404).json({
            msg: 'access denied'
        });
    }else{
        try {
            const decoded = jwt.verify(token, config.get('jwt_key'));
            const findUser = await User.findById(decoded._id);
            req.user = findUser;
            next();
        } catch (error) {
            return res.status(404).json({
                msg: 'token is invalid'
            });
        }
    }
}

async function isAdmin(req,res,next){
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(404).json({
            msg: 'access denied'
        });
    }else{
        try {
            const decoded = jwt.verify(token, config.get('jwt_key'));
            const findUser = await User.findById(decoded._id);
            if (findUser.admin) {
                req.admin = findUser;
                next();
            }else{
                return res.status(404).json({
                    msg: 'permission denied'
                });
            }
        } catch (error) {
            return res.status(404).json({
                msg: 'token is invalid'
            });
        }
    }

}

module.exports = {isLoggedIn, isAdmin};