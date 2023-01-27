const mongoose = require('mongoose');
const config = require('config');

module.exports = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(config.get('db_address'))
    .then(()=>{
        console.log('Database connected'); 
    }).catch((err)=>{
        console.log(err);
    });
}