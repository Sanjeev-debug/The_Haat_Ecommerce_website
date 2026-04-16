import React, { useState } from 'react'
import './DashboardProductDetails.css'

import { Box, Button, Grid2, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import saree1 from '../../../image/saree/2.webp'
import saree2 from '../../../image/saree/3.webp'
import saree3 from '../../../image/saree/4.webp'
import saree4 from '../../../image/saree/5.webp'


import HomeIcon from '@mui/icons-material/Home';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CategoryIcon from '@mui/icons-material/Category';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CropFreeIcon from '@mui/icons-material/CropFree';
import SellIcon from '@mui/icons-material/Sell';
import StoreIcon from '@mui/icons-material/Store';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContextProvider } from '../../../contextProvider/ContextProvider'


const DashboardProductDetails = () => {


  const { dashboardProductDetails } = useContextProvider()


  const [bigImage, setBigImage] = useState(dashboardProductDetails !== '' ? dashboardProductDetails.files[0] : '')

  let settingsBigImage = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  let settingsSmallImage = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    fade: false,

  };

  const showImage = (image) => {
    setBigImage(image)
  }

  return (
    <>
      <Box>
        <Grid2 container spacing={3}>
          <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <p style={{ fontSize: '20px' }} > Product View</p>
            <div >
              <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
            </div>
          </Grid2>

        </Grid2>
        <Grid2 container spacing={3} component={Paper} padding={2} mt={4} elevation={6} >
          <Grid2 size={{ xs: 12, md: 5 }} >
            <h4>Product Gallery</h4>
            <div style={{ marginTop: '10px' }} >
              <Slider {...settingsBigImage}>
                <div >
                  <img src={bigImage} style={{ height: '450px', borderRadius: '5px' }} alt="" />
                </div>


              </Slider>
            </div>
            <div className='dashboardsmallSlider' style={{ marginTop: '10px' }} >
              <Slider {...settingsSmallImage}>
                {dashboardProductDetails &&
                  dashboardProductDetails.files.map((item, index) => (

                    <div key={index} >
                      <img src={item} style={{ height: '100px', borderRadius: '5px' }} alt="" onClick={() => showImage(item)} />
                    </div>
                  ))
                }

              </Slider>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }} >
            <h4>Product Details</h4>
            <div className='dashboardProductDetailInfo' style={{ marginTop: '10px' }} >
              <h2>Formal Saree for women wedding dress looking hot and slim</h2>
              <Grid2 container spacing={2} mt={4} >
                <Grid2 size={{ xs: 1 }}>
                  <LabelImportantIcon />
                  <CategoryIcon />
                  <ColorLensIcon />
                  <CropFreeIcon />
                  <SellIcon />
                  <StoreIcon />
                  <StarPurple500Icon />
                  <CheckCircleIcon />
                </Grid2>
                <Grid2 size={{ xs: 2 }}>
                  <h4>Brand</h4>
                  <h4>Categary</h4>
                  <h4>Color</h4>
                  <h4>Size</h4>
                  <h4>Price</h4>
                  <h4>Stock</h4>
                  <h4>Review</h4>
                  <h4>Publiced</h4>

                </Grid2>
                <Grid2 size={{ xs: 1 }}>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                </Grid2>
                <Grid2 size={{ xs: 8 }}>
                  <h4>{dashboardProductDetails.brand}</h4>
                  <h4>{dashboardProductDetails.category}</h4>
                  <h4>
                    {dashboardProductDetails.color}
                  </h4>
                  <h4>
                    {dashboardProductDetails.size}
                  </h4>
                  <h4>{dashboardProductDetails.disCountPrice}</h4>
                  <h4>{dashboardProductDetails.productStock} (Piece)</h4>
                  <h4>(03) Review</h4>
                  <h4>{dashboardProductDetails.publiced}</h4>
                </Grid2>
              </Grid2>
            </div>
          </Grid2>
        </Grid2>
      </Box>
      <Box height={100} padding={5} mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
        <div style={{ width: "100%", height: '2px', background: ' #747070' }} ></div>
        <div style={{ width: "80%", height: '2px', background: ' #747070' }} ></div>
        <div style={{ width: "60%", height: '2px', background: ' #747070' }} ></div>
      </Box>
    </>

  )
}

export default DashboardProductDetails