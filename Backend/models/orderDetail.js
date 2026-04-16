const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    mobile: {
        type:Number,
        require:true
    },
   
    address: {
        type:String,
        require:true
    },
    pincode: {
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
   paymentId : {
        type:String,
        require:true
    },
    email: {
        type:String,
       
    },
    userId: {
        type:String,
        require:true
    },
    Status: {
        type:String,
        default:'Pending...'
    },
    cartProducts: [
        {
            productId:{
                type:String,
                require:true
            },
            productName:{
                type:String,
                require:true
            },
            quantity:{
                type:Number,
                require:true
            },
            productPrice:{
                type:Number,
                require:true
            },
            image:{
                type:String
            },
            subTotal:{
                type:Number
            }

        }
    ],
    date:{
        type: Date,
        default: Date.now,

    }
    
   
  });
  
 
  exports.Order=mongoose.model('Order',orderSchema);