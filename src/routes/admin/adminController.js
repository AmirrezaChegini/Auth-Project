const Controller = require('../controller');

class AdminController extends Controller{
    async dashboard(req,res){
        return res.status(200).send('admin dashboard');
    }

    async me(req,res){
        return res.status(200).json({
            data: req.user
        });
    }
}

module.exports = new AdminController;