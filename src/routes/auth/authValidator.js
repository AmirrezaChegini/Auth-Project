const {check} = require('express-validator');

class AuthValidator{

    registerValidator(){
        return [
            check('firstname','firstname must NOT empty').notEmpty(),
            check('lastname','firstname must NOT empty').notEmpty(),
            check('phone','phone is NOT corect').isLength({min:11,max:11}),
            check('email','email is NOT corect').isEmail(),
            check('password','password must be at least 8 character').isLength({min: 8}),
        ];
    }

    loginValidator(){
        return [
            check('phone','phone is NOT corect').isLength({min:11,max:11}),
            check('password','password must be at least 8 character').isLength({min: 8}),
        ];
    }
}

module.exports = new AuthValidator;