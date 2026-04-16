
import {  useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
import Watch from '../image/watch.jpg'
import NestedImage from '../image/nestedProduct/1.avif'
import axios from "axios";
import DashboardCategoryDetails from "../components/dashboard/category/DashboardCategoryDetails";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContextProvider = createContext();
export const useContextProvider = () => useContext(ContextProvider)


export const DataContextProvider = ({ children }) => {
        const firstRender = useRef(true);


  const [isDashboardLogin, setIsDashboardLogin] = useState(false);
  const [dashboardViewRefress, setDashViewRefress] = useState(false);
  const [openAccountList, setOpenAccountList] = useState(false);
  const [user,setUser]=useState('');
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [filterProductData, setFilterProductData] = useState('')
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [addCartData, setAddCartData] = useState([]);
  const [dashboardProductDetails, setDashboardProductDetails] = useState('');
  const [dashboardCategoryDetails, setDashboardCategoryDetails] = useState('');
  const [fileUpload, setFileUpload] = useState('');
  const [productImage, setProductImage] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [allCategoryData, setAllCategoryData] = useState('');
  const [showEditText, setShowEditText] = useState(false);
  const [priceFilter, setPriceFilter] = useState([100,500]);
  const [refressCart,setRefressCart]=useState(false)
  const [search,setSearch] =useState('');
  const [notFound,setNotFound]=useState('');
  const [cartListSubTotal,setCartListSubTotal]=useState('');
  const [total,setTotal]=useState(0);
  const [orderDetails,setOrderDetails]=useState('')
  const [orderRefress,setOrderRefress]=useState('')
  const [allOrderData,setAllOrderData]=useState('')
  const [userRefress,setUserRefress]=useState(false);
  const [subTotalList,setSubTotalList]=useState(0);
  const [categoryImage, setCategoryImage] = useState('');
  const [uploadCategoryImage, setUploadCategoryImage] = useState('');
  const [allUser,setAllUser]=useState([]);
  const [allCart,setAllCart]=useState([]);
  const [razorpayKey,setRazorpayKey]=useState('');

  const [categoryData, setCategoryData] = useState({
    categoryName: '',
    categoryBackgroundColor: ''
  });

  
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    category: '',
    subCategory: '',
    brand: '',
    regularPrice: '',
    disCountPrice: '',
    productStock: '',
    rating: 1,
    color: '',
    size: '',
    publiced: '',



  });

  
  
  const handleProductUpload = async (e) => {
    e.preventDefault()
    if (showEditText) {
      dashboardProductDetails.files = '';

      const formData = new FormData();
      for (let i = 0; i < fileUpload.length; i++) {
        formData.append("file", fileUpload[i]);
      }

      for (let key in dashboardProductDetails) {
        formData.append(key, dashboardProductDetails[key]);
        // console.log(key,uploadData[key])
      }

      try {
        const response = await axios.post(`${BACKEND_URL}/editProduct/${dashboardProductDetails._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        // console.log(response.data.data)
        // console.log(response.data.imageUrls)
        setProductImage(response.data.imageUrls);
        alert(response.data.message);
        setIsAddProduct(response.data)
      } catch (error) {
        console.error("Error uploading files:", error);
      }


    } else {
      console.log(uploadData)
      console.log(fileUpload)

      const formData = new FormData();
      for (let i = 0; i < fileUpload.length; i++) {
        formData.append("file", fileUpload[i]);
      }

      for (let key in uploadData) {
        formData.append(key, uploadData[key]);
        // console.log(key,uploadData[key])
      }


      try {
        const response = await axios.post(`${BACKEND_URL}/uploads`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        // console.log(response.data.data)
        // console.log(response.data.imageUrls)
        setProductImage(response.data.imageUrls);
        alert(response.data.message);
        setIsAddProduct(response.data)
      } catch (error) {
        console.error("Error uploading files:", error);
      }




      setUploadData({
        title: '',
        description: '',
        category: '',
        subCategory: '',
        brand: '',
        regularPrice: '',
        disCountPrice: '',
        productStock: '',
        rating: 1,
        color: '',
        size: '',
        publiced: '',



      });
    }

  };



  const handleCategoryUpload = async (e) => {
    e.preventDefault()

    if (showEditText) {
      dashboardProductDetails.file = ''

      // console.log(uploadData)
      // console.log(fileUpload)

      const formData = new FormData();
      formData.append("file", uploadCategoryImage);


      for (let key in dashboardProductDetails) {
        formData.append(key, dashboardProductDetails[key]);
        // console.log(key,uploadData[key])
      }


      try {
        const response = await axios.post(`${BACKEND_URL}/editCategory/${dashboardProductDetails._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        // console.log(response.data.data)
        // console.log(response.data.imageUrls)
        setCategoryImage(response.data.imageUrl);
        alert(response.data.message);
        setIsAddCategory(!isAddCategory)
      } catch (error) {
        console.error("Error uploading files:", error);
      }
      setCategoryData({


        categoryName: '',
        categoryBackgroundColor: ''

      });
    }
    else {
      // console.log(uploadData)
      // console.log(fileUpload)

      const formData = new FormData();
      formData.append("file", uploadCategoryImage);


      for (let key in categoryData) {
        formData.append(key, categoryData[key]);
        // console.log(key,uploadData[key])
      }


      try {
        const response = await axios.post(`${BACKEND_URL}/uploadCategory`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        // console.log(response.data.data)
        // console.log(response.data.imageUrls)
        setCategoryImage(response.data.imageUrl);
        alert(response.data.message);
        setIsAddCategory(!isAddCategory)
      } catch (error) {
        console.error("Error uploading files:", error);
      }
      setCategoryData({


        categoryName: '',
        categoryBackgroundColor: ''

      });
    }


  };

  useEffect(() => {
    console.log("BACKEND_URL:", BACKEND_URL);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/allProduct`);
        setAllProductData(response.data);
      } catch (err) {
        console.log("Error fetching products:", err);

      }
    };

    fetchProducts();
  }, [isAddProduct]);
  // console.log(allProductData);
  



  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/allCategory`);
        setAllCategoryData(response.data);
      } catch (err) {
        console.log("Error fetching category:", err);

      }
    };

    fetchCategory();
  }, [isAddCategory]);


  useEffect(()=>{
    const fetchRazorpayKey=async()=>{
      try {
        const response = await axios.get(`${BACKEND_URL}/razorpayKey`);
        setRazorpayKey(response.data);
        // console.log(response.data)
      } catch (err) {
        console.log("Error fetching category:", err);
        
      }
      
    }
    fetchRazorpayKey();
  },[])
  

  const dashboarProductDelete = async (id) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/productDelete/${id}`);
      setIsAddProduct(response.data)
    } catch (err) {
      console.log("Error fetching products:", err);

    }

  }


  const dashboarCategoryDelete = async (id) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/categoryDelete/${id}`);
      setIsAddCategory(response.data)
    } catch (err) {
      console.log("Error fetching products:", err);

    }

  }



  const filterData = async (filterData) => {
    try {
      console.log("FILTER PARAMS:", filterData);
      const response = await axios.get(`${BACKEND_URL}/filterProduct`, { params: filterData })

      console.log("FILTER RESPONSE:", response.data);

      setAllProductData(response.data)
      setNotFound(response.data.message)
    }
    catch (err) {
      console.log("error fetching filterProduct", err)
    }
  }




  const filterDataBySearch = async (filterData) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/filterProductBySearch`, { params:{name: filterData} })
      setAllProductData(response.data)
      setNotFound(response.data.message)
    }
    catch (err) {
      console.log("error fetching  filter Product by Search", err)
    }
  }

  
  
    const filterPriceData = async (filterPrice) => {
        // console.log(filterPrice)
        try{
        

          const response= await axios.get(`${BACKEND_URL}/filterByPrice`,{params :filterPrice})
          setAllProductData(response.data)
          // console.log(response)
          setNotFound(response.data.message)
        }
        catch(err){
          console.log("error fetching filterProduct",err)
        }
    }
    useEffect(()=>{
            if (firstRender.current) {
    firstRender.current = false; 
    return;
  }
      filterPriceData(priceFilter)
    },[priceFilter])
  
  
    const handleUserSignUp = async (userSignUpData) => {
  
  
      try {
        const response = await axios.post(`${BACKEND_URL}/signUp`, userSignUpData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
      }
  
    }
  
    
    const handleUserSignIn = async (userSignInData) => {
      
      // console.log(userSignInData)
     if(userSignInData=='') return  ;
     
      
      try {
        const response = await axios.get(`${BACKEND_URL}/signIn`,
          {
            params: userSignInData,
            headers: {
              'Content-Type': 'application/json'
            }
          });
          // alert(response.data.message)  
          // console.log(response.data.user)
          setUser(response.data.user);
          return  response.data.user;
        } catch (error) {
          console.log('Error in Internal server', );
        }
     
        
      }
    
   
     const handleAddToCartData = async (userId, productId,quantity) => {
      
  
      try {
        const response = await axios.post(`${BACKEND_URL}/addToCart`, { userId, productId, quantity }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
         
        console.log(response.data);
        setRefressCart(!refressCart)
  
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
      }
  
    }
  
    
      const handleUpdateCartData = async (userId, productId,count) => {
      
  
        try {
          const response = await axios.post(`${BACKEND_URL}/updateCart`, { userId, productId, count }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
           
          // console.log(response.data);
          
          // alert(response.data.message)
          setRefressCart(!refressCart)
    
        } catch (error) {
          console.error('Error:', error.response?.data || error.message);
        }
    
      } 
      
    
      const handleDeleteCart= async(userId,productId)=>{
        try {
          const response = await axios.get(`${BACKEND_URL}/deleteCartItem`, {
            params: {
              userId,
              productId
            }
          });
          setRefressCart(!refressCart)
           alert(response.data.message)
        } catch (err) {
          console.log("Error fetching deleteCart:", err);
    
        }
      }



      useEffect(()=>{
      
      
        const cartFetch=async()=>{
          // console.log(user._id)
          if (!user._id) {
            console.log( "User ID is required" );
            
          }else{
      
            try {
              const response = await axios.get(`${BACKEND_URL}/cartData/${user._id}`);
          
              // console.log(response.data.cart.items);
               setAddCartData(response.data.cart.items)
              
            } catch (error) {
              console.log(' Internal server  error' );
            }
          }
        }
        cartFetch()
      
      
      },[refressCart]);
      
      
      useEffect(()=>{
      
      
        const cartFetch=async()=>{
          // console.log(user._id)
          
      
            try {
              const response = await axios.get(`${BACKEND_URL}/allCartData`);
          
             
               setAllCart(response.data)
              // console.log(response.data)
              
            } catch (error) {
              console.log(' Internal server  error' );
            }
          
        }
        cartFetch()
      
      
      },[refressCart]);
      useEffect(()=>{
      
      
        const cartFetch=async()=>{
          // console.log(user._id)
          
      
            try {
              const response = await axios.get(`${BACKEND_URL}/allUserData`);
          
            
               setAllUser(response.data)
              // console.log(response.data)
              
            } catch (error) {
              console.log(' Internal server  error' );
            }
          
        }
        cartFetch()
      
      
      },[refressCart]);



      
      useEffect(() => {
        const fetchOrder = async () => {
          try {
            const response = await axios.get(`${BACKEND_URL}/allOrder`);
            setAllOrderData(response.data);
          } catch (err) {
            console.log("Error fetching all Order Data:", err);
      
          }
        };
      
        fetchOrder();
      }, [orderRefress]);
      
      // console.log(allOrderData)
      
        const nestedData = [
          {
            img: NestedImage,
            title: 'Best Product in market for selling',
            newPrice: '$32.5',
            oldPrice: '$35.9'
          },
          {
            img: NestedImage,
            title: 'Best Product in market for selling',
            newPrice: '$32.5',
            oldPrice: '$35.9'
          },
          {
            img: NestedImage,
            title: 'Best Product in market for selling',
            newPrice: '$32.5',
            oldPrice: '$35.9'
          },
        ]
      
        const advanceData = [
          {
            title: 'Top Selling'
          },
          {
            title: 'Trending Products'
          },
          {
            title: 'Recently added'
          },
          {
            title: 'Top Rated'
          },
        ]
      
        const womenCollection = [
          { item: 'Saree', route: '/saree' },
          { item: 'Kurti', route: '/kurti' },
          { item: 'Lehenga', route: '/lehenga' },
          { item: 'Sarara', route: '/sarara' },
          { item: 'InnerWear', route: '/innerwear' },
        ]
        const kidsWear = [
          { item: 'pants', route: '/pants' },
          { item: 'Shirt', route: '/shirt' },
          { item: 'T-Shirt', route: '/tshirt' },
          { item: 'Lower', route: '/lower' },
          { item: 'Shoes', route: '/shoes' },
        ]
        const homeDecors = [
          { item: 'Scenery', route: '/scenery' },
          { item: 'FlowersPot', route: '/flowersPot' },
          { item: 'kitchenSet', route: '/kitchenSet' },
          { item: 'ColorfulLight', route: '/colorfulLight' },
          { item: 'BedSheet', route: '/bedSheet' },
        ]
        const productData = [
          {
            cornerTitle: 'hot',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'new',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'sale',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'new',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'sale',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'new',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'hot',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'hot',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'new',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'sale',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            cornerTitle: 'new',
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
          {
            img: Watch,
            title: 'Watch',
            description: 'This is unique watch in the world',
            newPrice: '$25',
            oldPrice: '$22'
          },
      
      
      
      
        ]




        return (
          <ContextProvider.Provider value={{ womenCollection, kidsWear, homeDecors, productData, advanceData, nestedData, dashboardProductDetails, setDashboardProductDetails, isDashboardLogin, setIsDashboardLogin, fileUpload, setFileUpload, uploadData, setUploadData, handleProductUpload, productImage, allProductData, categoryData, setCategoryData, categoryImage, setCategoryImage, setUploadCategoryImage, uploadCategoryImage, setAllCategoryData, allCategoryData, handleCategoryUpload, dashboardViewRefress, setDashViewRefress, setShowEditText, showEditText, dashboarProductDelete, addCartData, setAddCartData, dashboarCategoryDelete, setDashboardCategoryDetails, dashboardCategoryDetails, setFilterProductData, filterProductData, filterData, setPriceFilter, priceFilter, filterPriceData, openAccountList, setOpenAccountList, handleUserSignUp, handleAddToCartData,user,setUser,refressCart,setRefressCart,handleUserSignIn,search,setSearch,filterDataBySearch,setNotFound,notFound,setIsAddProduct,isAddProduct,subTotalList,setSubTotalList,cartListSubTotal,setCartListSubTotal,handleUpdateCartData,total,setTotal,orderDetails,setOrderDetails,handleDeleteCart,orderRefress,setOrderRefress,allOrderData,userRefress,setUserRefress,allUser,setAllUser,allCart,setAllCart,razorpayKey,setRazorpayKey}} >
            {children}
          </ContextProvider.Provider>
        )
      }








      


  



