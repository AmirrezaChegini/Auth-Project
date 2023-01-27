const winston = require('winston');

module.exports = ()=>{
    process.on('uncaughtException',(err)=>{
        console.log('uncaughtException');
        winston.error(err.message, err);
        // process.exit(1);
    });
    process.on('unhandledRejection',(err)=>{
        console.log('unhandledRejection');
        winston.error(err.message, err);
        // process.exit(1);
    });
    winston.add(new winston.transports.File({filename: 'errorLogs.log'}));
}