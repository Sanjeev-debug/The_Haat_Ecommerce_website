


const mongoose=require('mongoose')

const productListSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    regularPrice:{
        type:String,
        required:true
    },
    disCountPrice:{
        type:Number,
        required:true
    },
    productStock:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    publiced:{
        type:String,
        required:true
    },
    files:[
        {
            type:String,
            required:true
        }
    ]
   
})

exports.Product=mongoose.model('Product',productListSchema);