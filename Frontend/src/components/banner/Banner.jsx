import { Box, Container, Grid2, Paper } from '@mui/material'
import React from 'react'
import one from '../../image/banner/1.jpg'
import two from '../../image/banner/2.jpg'
import three from '../../image/banner/3.jpg'
import './banner.css'

const Banner = () => {
  return (
    <Box sx={{mt:5,mb:5}} >
        <Box component={Paper} elevation={1} sx={{padding:2}} >

            <Grid2 container spacing={2}   >
                <Grid2 size={{xs:12,md:4}} >
                    <div  className='banner'  style={{width:'100%'}} >
                          <img src={one} alt="" />
                    </div>
                </Grid2>
                <Grid2 size={{xs:12,md:4}} >
                    <div  className='banner' style={{width:'100%'}} >
                    <img src={two} alt="" />
                    </div>  
                </Grid2>
                <Grid2 size={{xs:12,md:4    }} >
                    <div className='banner'  style={{width:'100%'}} >
                    <img src={three} alt="" />
                    </div>
                </Grid2>
            </Grid2>

        </Box>  
    </Box>
  )
}

export default Banner