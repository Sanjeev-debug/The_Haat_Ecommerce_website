const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    file:{
            type:String,
            required:true
    },
    categoryBackgroundColor:{
        type:String,
        required:true
    }
})

exports.Category=mongoose.model('Category',categorySchema);
