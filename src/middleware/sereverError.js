const winston = require('winston');

function serevrError(err,req,res,next){
    winston.error(err.message, err);
    res.status(500).json({
        msg: 'server error'
    });
}

module.exports = serevrError;