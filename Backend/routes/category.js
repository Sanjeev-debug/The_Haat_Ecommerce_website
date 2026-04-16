const {Category}=require('../models/category')

const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{
    
    const category2= new Category({
        name:'pen',
        image:'1',
        color:'blue',
        itemStock:'19'
    });

    await category2.save();

    const categoryList= await Category.find({color:'blue'});
    if(!categoryList){
        res.status(500).json({success:false});

    }
    res.send(categoryList)
});

module.exports=router