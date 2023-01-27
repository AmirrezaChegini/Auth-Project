const autoBind = require('auto-bind');
const {validationResult} = require('express-validator');

class Controller {

    constructor(){
        autoBind(this);
    }

    validation(req,res,next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorArray = errors.array();
            const msg = [];
            errorArray.forEach(err => {
                msg.push(err.msg);
            });
            res.status(404).json({
                msg
            }); 
            return false;
        }
        else{
           return true;
        }
    }

    validate(req,res,next){
        if (this.validation(req,res)) {
            next();
        } else {
            return;
        }
    }


}

module.exports = Controller;