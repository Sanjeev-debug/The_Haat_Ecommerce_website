import React from 'react'
import './TopProductsSelection.css'
import { Box, Grid2, Paper } from '@mui/material'
import NestedProduct from './nestedProduct/NestedProduct'

const   TopProductsSelection = ({advanceData}) => {
    return (
        <>
            <Box  sx={{mt:-5}} >
                <Grid2 container columnSpacing={2} padding={2} sx={{display:'flex',justifyContent:'space-evenly'}} >
                    {
                     advanceData.map((item,index)=>{
                        return  <Grid2 key={index} size={{ms:12,sm:6,md:4,lg:3}}   >
                            <h2 className='topProductTitle' style={{marginBottom:'10px',}} >{item.title}</h2>
                            
                            <NestedProduct/>

                        </Grid2>
                       })
                    }
                    

                   

                </Grid2>
            </Box>
             <Box component={Paper} sx={{borderBottom:"1px solid grey",m:2}}></Box>
        </>
    )
}

export default TopProductsSelection