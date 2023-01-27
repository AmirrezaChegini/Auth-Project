const Controller = require('../controller');
const User = require('./../../models/user');

class UserController extends Controller{
    async dashboard(req,res){
        return res.status(200).send('dashboard');
    }

    async me(req,res){
        return res.status(200).json({
            data: req.user
        });
    }
}

module.exports = new UserController;