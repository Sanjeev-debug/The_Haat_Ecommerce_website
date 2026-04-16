const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const Razorpay = require('razorpay');
const crypto=require('crypto');




require('dotenv').config();
const { PORT=5000, CONNECTION_STRING,RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET } = process.env;
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";


const { Category } = require('./models/category');
const { Product } = require('./models/productList');
const { User } = require('./models/user');
const { Cart } = require('./models/cart');
const { Order } = require('./models/orderDetail');


app.use(cors({
      origin: process.env.FRONTEND_URL, 
      credentials: true,             
}));
app.options('*', cors());

app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// const categoryRoutes= require('./routes/category')

// app.use('/api/category',categoryRoutes)




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});



const maxSize = 3 * 1000 * 1000;

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        const filetypes = /jpeg|jpg|png|webp/;
        const mimetype = filetypes.test(file.mimetype);

        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(
            "Error: File upload only supports the " +
            "following filetypes - " +
            filetypes
        );
    }

})



//================== razorpay start =================================


const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
  });

  app.get('/razorpayKey', (req, res) => {
    res.json( RAZORPAY_KEY_ID );
  });



  app.post("/createOrder", async (req, res) => {
    const { amount, currency } = req.body;
    // console.log(amount,currency)
  
    const createOrder = {
      amount: amount * 100, 
      currency:currency,
      receipt: "order_" + new Date().getTime()
    };
  
    try {
      const order = await razorpay.orders.create(createOrder);
      
      res.json(order);
    } catch (err) {
        console.log('razorError')
      res.status(500).json({ error: err.message });
    }
  });
  
  // API to verify payment
  app.post("/verify", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    // console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
  
    const hmac = crypto.createHmac("sha256", `${RAZORPAY_KEY_SECRET}`);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const digest = hmac.digest("hex");
  
    if (digest === razorpay_signature) {
      res.json({ status: "success" });
    } else {
      res.status(400).json({ status: "failed" });
    }
  });



  //======================== RazorPay end ==============================


  //=================orderDetails start =================================

  app.post("/orderDetails", async (req, res) => {

   
      const orderData  = req.body;
    //   console.log(orderData)
    try {
       
        const newOrder = new Order( orderData);
        await newOrder.save();
    
        res.status(201).json({ message: "Order Save In DataBase!" });
      } catch (error) {
        res.status(500).json({ error: "Error creating user" });
      }
    
});



app.get("/allOrder", async (req, res) => {
    try {
        const orderData = await Order.find();
        res.json(orderData);
      } catch (error) {
        console.log("Error fetching order data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});





// ================orderDetails end ====================================
app.get("/allProduct", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.get("/filterProduct", async (req, res) => {

     let filterData=req.query;
     let {categoryName}=filterData;
    

     try {
        const products = await Product.find({ category: categoryName }); 
        console.log("Filtered Products ");

        if(products.length ==0){
            res.json({message:'No Product were Found'})
        }
        else{
            res.json(products);
            
        }
        
    } catch (err) {
        console.error("Error fetching products by category:", err);
        res.json(err)           
    }
    
});
app.get("/filterProductBySearch", async (req, res) => {

    let {name}=req.query;
    // console.log(name)

    try {
        const productBySearch = await Product.find({
          $or: [
            { title: { $regex: name, $options: 'i' } },  // Case-insensitive title match
            { category: { $regex: name, $options: 'i' } }, // Case-insensitive category match
            { brand: { $regex: name, $options: 'i' } }  // Case-insensitive brand match
          ]
        });
    
        console.log(productBySearch);
        if(productBySearch.length ==0){
            res.json({message:'No Product were Found'})
        }
        else{
            res.json(productBySearch)
        }
        
      } catch (error) {
        console.error('Error fetching products:', error);
        res.json(error) 
      }
   
    });
   
app.get("/filterByPrice", async (req, res) => {

    let filterData=req.query;
    minPrice=Number(filterData[0]);
    maxPrice=Number(filterData[1]);
    console.log(minPrice,maxPrice)
   

    try {
       const products = await Product.find({disCountPrice: { $gte: minPrice, $lte: maxPrice }}); 
       console.log("Filtered Products ");
    //    console.log(products)
       
       if(products.length ==0){
        res.json({message:'No Product were Found'})
    }
    else{
        
        res.json(products);
    }
       
   } catch (err) {
       console.error("Error fetching products by category:", err);
       res.json(err)           
   }
   
});



app.post("/editProduct/:id", upload.array("file", 5), async (req, res) => {

    // console.log(req.params.id)
    // console.log(req.files)
    // console.log(req.body)
    const imageUrls = await req.files.map(file => `${BASE_URL}/uploads/${file.filename}`);

    let editProductData = req.body;
    editProductData.files = imageUrls;


    const editedProductData = await Product.findOneAndReplace(
        { _id: req.params.id }, // Filter
        editProductData, // New document
        { returnDocument: "after" } // Returns the updated document
    )

    console.log(editedProductData)
    if (!req.files) {
        return res.status(400).json({ message: "No files uploaded" });
    }


    res.json({
        message: "Files uploaded successfully",


    });
});

app.post("/editCategory/:id", upload.single("file"), async (req, res) => {

    
   



    const imageUrl = `${BASE_URL}/uploads/${req.file.filename}`;
    let editCategoryData = req.body;
    editCategoryData.file = imageUrl;

    

    console.log('edit category',editCategoryData);

    const editedCategoryData = await Category.findOneAndReplace(
        { _id: req.params.id }, // Filter
        editCategoryData, // New document
        { returnDocument: "after" } // Returns the updated document
    )

    


    if (!req.file) {
        return res.status(400).json({ message: "No files uploaded" });
    }


    res.json({
        message: "File uploaded successfully",
        
    });
});


app.get("/allCategory", async (req, res) => {
    const categorys = await Category.find();
    res.json(categorys);
});



app.get("/productDelete/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully",
            data:'SuccessFull Deleted'
         });
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.get("/categoryDelete/:id", async (req, res) => {
    try {
        const deletedCategory = await Category.findOneAndDelete({ _id: req.params.id });

        if (!deletedCategory) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Category deleted successfully",
            data:'SuccessFull Deleted'
         });
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.post('/uploads', upload.array("file", 5), async (req, res) => {




    const imageUrls = await req.files.map(file => `${BASE_URL}/uploads/${file.filename}`);

    let productData = req.body;
    productData.files = imageUrls;

    // console.log(imageUrls);

    // console.log(productData);

    const product1 = new Product(
        productData
    )

    await product1.save()


    if (!req.files) {
        return res.status(400).json({ message: "No files uploaded" });
    }


    res.json({
        message: "Files uploaded successfully",
        imageUrls,
        data: req.body
    });
});
app.post('/uploadCategory', upload.single("file"), async (req, res) => {



    console.log(req.body)
    console.log(req.file.filename)



    const imageUrl = `${BASE_URL}/uploads/${req.file.filename}`;
    let productData = req.body;
    productData.file = imageUrl;

    console.log(imageUrl);

    console.log(productData);

    const category1 = new Category(
        productData
    )

    await category1.save()


    if (!req.file) {
        return res.status(400).json({ message: "No files uploaded" });
    }


    res.json({
        message: "Files uploaded successfully",
        // imageUrl ,
        data: productData
    });
});


app.post('/signUp',async(req,res)=>{

    
    try {
        const { name, email, password ,mobile} = req.body;
    
       
        const newUser = new User({ name, email, password, mobile});
        await newUser.save();
    
        res.status(201).json({ message: "User created successfully!" });
      } catch (error) {
        res.status(500).json({ error: "Error creating user" });
      }
});

app.get('/signIn',async(req,res)=>{
  

    try{
      const {name,password}=req.query;
    //   console.log(name,password)
      const user= await User.findOne({name:name,password:password}) ;
      
      if (user) {
        res.json({ success: true, message: 'User found', user });
        console.log(user)
    } else {
        res.status(404).json({ success: false, message: 'Invalid credentials' });
    }
    }catch(error){
        res.status(500).json({ error:"find User Error" });
    }
});

app.get("/allUserData", async (req, res) => {
    const allUser = await User.find();
    res.json(allUser);
});

app.post('/addToCart',async(req,res)=>{

    
    let { userId, productId, quantity=1 } = req.body;
    
   

  let cart = await Cart.findOne({ userId });
 

  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }
  let itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  if(itemIndex===0){
   return res.json({ message: "Item Already exist", cart });
  }

  cart.items.push({ productId, quantity });
  await cart.save();

  res.json({ message: "Item added to cart", cart });

});
app.post('/updateCart',async(req,res)=>{

    
    let { userId, productId, count } = req.body;
    
   console.log(userId,productId,count)

  


let cart = await Cart.findOneAndUpdate(
    { userId, "items.productId": productId }, // Find the user's cart and item
    { $set: { "items.$.quantity": count } }, // Update quantity
    { new: true } // Return updated document
);
if (!cart) {
    return res.json({ message: "Cart not found" });
}
console.log(cart)
//   cart.items.push({ productId, quantity });
//   await cart.save();

  res.json({ message: "Quantity Updated to cart", cart });

})


app.get('/cartData/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        
        // console.log('cart')
        const cart = await Cart.findOne({ userId }).populate("items.productId"); 

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}); 

app.get("/allCartData", async (req, res) => {
    const allCart = await Cart.find();
    res.json(allCart);
});

 app.get('/deleteCartItem', async (req, res) => {
        const { userId, productId } = req.query;
      
        try {
          const result = await Cart.updateOne(
            { userId }, 
            { $pull: { items: { _id:productId } } } 
          );
      
          if (result.modifiedCount > 0) {
            res.json({ message: 'Item deleted successfully' });
          } else {
            res.status(404).json({ message: 'Item not found or already deleted' });
          }
        } catch (error) {
          console.error('Error deleting item:', error);
          res.status(500).json({ message: 'Server error' });
        }
      });

mongoose.connect(CONNECTION_STRING)
    .then(() => {
        console.log("Database connection is ready");


        app.listen(PORT, () => {
            console.log(`Server is running http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err)
    })



