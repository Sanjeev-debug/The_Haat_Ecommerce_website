import React from 'react'
import './ProductSlider.css'
import { Box, Button, Grid2, Rating } from '@mui/material'
import Slider from "react-slick";
import GreenNature from '../../image/banner/4.jpg'
import { NavLink, useNavigate } from 'react-router'
import { green } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContextProvider} from '../../contextProvider/ContextProvider'

const ProductSlider = ({ data }) => {

  const {allProductData,setDashboardProductDetails,user,handleAddToCartData}=useContextProvider()
  
  const Navigate=useNavigate()
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,

    autoplay: 3000,

    centerMode: true,
  };

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
  return (
    <>
      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Grid2 container columnSpacing={2}  >
          <Grid2 size={{ xs: 6, md: 4, lg: 3 }} sx={{ height: 440, borderRadius: '10px', overflow: 'hidden' }} >
            <img src={GreenNature} alt="" style={{ width: '100%', height: '100%' }} />
          </Grid2>

          <Grid2 size={{ xs: 6, md: 8, lg: 9 }} columns={15} columnSpacing={2} sx={{ padding: 1 }} >
            <Slider {...settings} className='homeSliderMain' >
              {allProductData.length>0 &&
                  allProductData.map((item, index) => {
                  return <Grid2 size={{ xs: 15, md: 5, lg: 3 }} sx={{ display: 'flex', }} key={index}   >
                    <div className='popularMain' >
                      <div className='popularProduct' style={{ height: 400, borderRadius: '25px', padding: '20px', overflow: 'hidden' }}>
                        {
                          item.cornerTitle && <div style={{ textAlign: 'center', lineHeight: '40px', textTransform: 'capitalize' }} className={`cornerTitle ${item.cornerTitle}`}>{item.cornerTitle}</div>
                        }
                       <img onClick={()=>homeShowProductDetail(item)} style={{ width: '100%', height: '200px' }} src={item.files[0]} alt="Loading.." />

                        <div className='productInfo' >
                          <p>{item.title}</p>
                          <h3>{item.description}</h3>
                          <div className='rating' >
                            <Rating name="half-rating-read" value={item?.rating || 0} precision={0.5}  />
                            <div className='product' >
                              <div className='productPrice' >
                                <h2>{item.disCountPrice}</h2>
                                <h3><del>{item.regularPrice}</del></h3>
                              </div>
                              <Button variant='contained' sx={{ textTransform: 'capitalize', background: green[500] }} onClick={() =>handleAddCart(item)} ><ShoppingCartOutlinedIcon />Add</Button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </Grid2>

                })
              }
            </Slider>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default ProductSlider