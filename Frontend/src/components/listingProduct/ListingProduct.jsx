import React from 'react'
import '../Product/Product.css'
import { Box, Button, Grid2, Link, Rating } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { green } from '@mui/material/colors';
import { NavLink, useNavigate } from 'react-router'
import { useContextProvider } from '../../contextProvider/ContextProvider';


const ListingProduct = ({ data,columns }) => {
  const { allProductData , setDashboardProductDetails,addCartData,setAddCartData,handleAddToCartData,user,notFound} = useContextProvider()
  const homeShowProductDetail= async(item)=>{
  await setDashboardProductDetails(item);
   
   Navigate('/product/detail');

 }

 const handleAddCart= async (item)=>{
  if(!user._id){
  Navigate('/userSignIn')
  }else{

    handleAddToCartData(user._id,item._id)
    Navigate('/cart') 
  }
 }

//  console.log(notFound)

  const Navigate = useNavigate()
  return (
    <>
      <Box sx={{ padding: 2 }} >
        <Grid2 container spacing={2}  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          {allProductData.length > 0 &&
            allProductData.map((item, index) => {
              return <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={index}  >
                <div className='popularMain' >
                  <div className='popularProduct' style={{ height: '420px', borderRadius: '20px', padding: '20px', overflow: 'hidden' }}>
                    {/* {
                  item.cornerTitle &&   <div style={{textAlign:'center',lineHeight:'40px',textTransform:'capitalize'}} className={`cornerTitle ${item.cornerTitle}`}>{item.cornerTitle}</div>
                } */}
                 <div style={{width: '100%', height: '220px',overflow:'hidden', borderRadius: '20px',marginBottom:'20px' }} > 
                    <img onClick={()=>homeShowProductDetail(item)} style={{ width: '100%', height: '220px', borderRadius: '20px' }} src={item.files[0]} alt="Loading.." />
                    </div>

                    <div className='productInfo' >
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                      <div className='rating' >
                        <Rating style={{marginTop:'10px'}} name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                        <div className='product' >
                          <div className='productPrice' >
                            <h3 style={{marginRight:'5px'}}>Rs.{item.disCountPrice}</h3>
                            <h4><del>Rs.{item.regularPrice}</del></h4>
                          </div>
                          <Button variant='contained' sx={{ textTransform: 'capitalize', background: green[500] }} onClick={() =>handleAddCart(item) }  ><ShoppingCartOutlinedIcon />Add</Button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </Grid2>

            })
          }
          {notFound ? <h1>{notFound}</h1>:''}
        </Grid2>
      </Box>
    </>
  )
}

export default ListingProduct