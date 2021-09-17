const mongoose = require('mongoose')

const project = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    developer:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    technology:{
        type:String,
        require:true
    },
    abstract:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('project',project)