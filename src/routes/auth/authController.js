const Controller = require('../controller');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

class AuthController extends Controller{

    async register(req,res){

        const foundUserByEmail = await User.findOne({email: req.body.email});
        const foundUserByPhone = await User.findOne({phone: req.body.phone});

        if (foundUserByEmail) {
            return res.status(404).json({
                msg: 'this email already used'
            });
        }else if(foundUserByPhone){
            return res.status(404).json({
                msg: 'this phone already used'
            });
        }else {
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                age: req.body.age,
                email: req.body.email,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password,10),
                admin: req.body.admin,
                softskills: req.body.softskills
            });
            await newUser.save();

            return res.status(200).json({
                msg: 'register successed',
                data: newUser
            });

        }

    }

    async login(req,res){
        const foundUser = await User.findOne({phone: req.body.phone});

        if (foundUser) {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                const token = jwt.sign({_id: foundUser._id}, config.get('jwt_key'));
                return res.status(200).json({
                    msg: 'login',
                    data: token
                });
            }else{
                return res.status(404).json({
                    msg: 'password NOT correct',
                });
            }
        }else{
            return res.status(404).json({
                msg: 'phone can NOT found',
            });
        }

    }
}

module.exports = new AuthController;