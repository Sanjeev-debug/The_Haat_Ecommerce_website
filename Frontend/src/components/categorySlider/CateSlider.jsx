import React, { useState } from 'react'
import Slider from "react-slick";
import './CateSlider.css'
import { Box, Grid2, Hidden, Paper, Typography } from '@mui/material'
import Shoes from '../../image/shoe.jpg'

import { useContextProvider } from '../../contextProvider/ContextProvider';


const CateSlider = () => {
  const { allCategoryData } = useContextProvider()



  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
    centerMode: true


  };

  return (
    <Box sx={{ width: '100%', height: 'auto',  }}>
      <Typography variant='h4' sx={{ fontWeight: 700, mt: '-60px', padding: '30px 0px' }} >Featured Categories</Typography>
      <Slider {...settings} className='CateSliderMain'  >


        {allCategoryData?.length > 0 &&
          allCategoryData?.map((item, index) => {
            return <div className="item" key={index} >
              <div className="info" style={{ background: item.categoryBackgroundColor, borderRadius: '5px' }} >
                <div style={{overflow:'hidden',borderRadius:'5px',marginTop:'10px'}}><img src={item.file} alt="" style={{ borderRadius: '5px', overflow: 'hidden' }} /></div>
                <h3>{item.categoryName}</h3>

              </div>
            </div>
          })
        }

      </Slider>

    </Box>
  )
}

export default CateSlider