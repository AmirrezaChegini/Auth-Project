const mongoose = require('mongoose');
const moment = require('jalali-moment');

const User = mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    age: Number,
    phone: {type:String, length:11, unique:true},
    email: {type:String, unique:true},
    password: {type:String, required:true},
    admin: {type:Boolean, default:false},
    softskills: [{name: String, progress:Number}],
    hardskills: [{name: String, progress:Number}],
    expertise: [{name: String, progress:Number}],
    resume: [{job: String, startyear:String, endyear:String}],
    biography: {type: String, maxLenght: 100},
    createdAt: {type:String, default:moment().local('fa').format('YYYY/MM/DD HH:mm')},
});

module.exports = mongoose.model('User',User,'User');