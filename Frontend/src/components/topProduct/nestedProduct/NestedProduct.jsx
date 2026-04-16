import React from 'react'
import './NestedProduct.css'
import { Box, Grid2,  Rating } from '@mui/material'
import { useContextProvider } from '../../../contextProvider/ContextProvider'
import { Link} from 'react-router'

const NestedProduct = () => {
    const { nestedData } = useContextProvider()
    return (
        <>
            <Box sx={{mt:5}} >  
               {
                   nestedData.map((item, index) => (
                        <div className="nestedMain" key={index} >
                        <Grid2 container padding={0}sx={{mt:2}} columnSpacing={2} >

                            <Grid2 size={{ xs: 4 }}  >
                               <Link   > <img style={{ height: 100,borderRadius:'5px' }} src={item.img} alt="" /></Link>
                            </Grid2>
                            <Grid2 size={{ xs: 8 }} >
                                <h3> <Link className='nestedTitleLink' >{item.title}</Link></h3>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                
                                <div style={{display:'flex',}} >
                                         <h3 className='nestedNewPrice' >{item.newPrice}</h3>
                                         <h4 className='nestedOldPrice' ><del>{item.oldPrice}</del></h4>
                                
                                </div>

                            </Grid2>

                        </Grid2>
               </div>
                    ))
                }
            </Box>
        </>
    )
}

export default NestedProduct