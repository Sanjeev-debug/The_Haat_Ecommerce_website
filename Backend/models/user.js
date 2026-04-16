const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
            type:String,
            required:true,
            unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    }

})

exports.User=mongoose.model('User',userSchema);
