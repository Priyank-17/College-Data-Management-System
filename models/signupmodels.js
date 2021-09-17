const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    enrollNo:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    isDeleted:{
        type:'Boolean',
        default:false
    }
});
signUpTemplate.method.generateHash = function(password){
    return bcrypt.HashSync(password,bcrypt.genSaltSync(8),null);
};
signUpTemplate.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.passsword);
};
module.exports = mongoose.model('mytabel',signUpTemplate)