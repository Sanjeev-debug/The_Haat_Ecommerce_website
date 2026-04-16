import React from 'react'
import Slider from "react-slick";
import { Box, Button, Container, Fade, Grid2, Paper, Typography } from '@mui/material'
import './Sliders.css'
import Watch from '../../image/watch.jpg'
import Sale from '../../image/sale.avif'
import One from '../../image/1.jpg'
import { blue, green, grey } from '@mui/material/colors';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';




const Sliders = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: 'linear'
  };

  return (
    <>


      <Box  sx={{ p: 2 }} >
        <Slider {...settings} className='homeSliderMain' >
          <div >
            <div className='sliderBanner' style={{ backgroundImage: `url(${Sale})`, width: '100vw', height: 500, backgroundPosition: 'center', backgroundSize: '100%', position: 'relative' }} >
              <div style={{ position: 'absolute', top: '60px', left: '150px', fontSize: '35px', color: green[700] }} >
                <h1>Greate Collections</h1>
                <h1>Big Discount</h1>
              </div>
              <p style={{ position: 'absolute', top: 220, left: 150, fontSize: '30px', color: 'white' }} >Save up to 50%  off on your first order</p>
            </div>
          </div>
          <div >
            <div className='sliderBanner' style={{ backgroundImage: `url(${One})`, width: '100vw', height: 500, backgroundPosition: 'center', backgroundSize: '100%', position: 'relative' }} >
              <div style={{ position: 'absolute', top: '60px', left: '150px', fontSize: '35px', color: green[500] }} >
                <h1>Greate Collections</h1>
                <h1>Big Discount</h1>
              </div>
              <p style={{ position: 'absolute', top: 220, left: 150, fontSize: '30px', color: 'grey' }} >Save up to 50%  off on your first order</p>
            </div>
          </div>
          <div >
            <div className='sliderBanner' style={{ backgroundImage: `url(${Watch})`, width: '100vw', height: 500, backgroundPosition: 'center', backgroundSize: '100%', position: 'relative' }} >
              <div style={{ position: 'absolute', top: '60px', left: '150px', fontSize: '35px', color: green[500] }} >
                <h1>Greate Collections</h1>
                <h1>Big Discount</h1>
              </div>
              <p style={{ position: 'absolute', top: 220, left: 150, fontSize: '30px', color: 'grey' }} >Save up to 50%  off on your first order</p>
            </div>
          </div>

        </Slider>
        <div className='sliderInput' >
          <SendOutlinedIcon />
          <input type="text" placeholder='Enter email address' />
          <Button variant='contained' color='success' sx={{ borderRadius: '50px' }} >Subscribe</Button>
        </div>
      </Box>



    </>
  )
}

export default Sliders