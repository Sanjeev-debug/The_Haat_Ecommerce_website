import React from 'react'
import './listing.css'
import { Box, Grid2 } from '@mui/material'
import { Link } from 'react-router'
import SideBar from '../../components/sideBar/SideBar'
import { useContextProvider } from '../../contextProvider/ContextProvider'
import Product from '../../components/product/Product'
import ListingProduct from '../../components/listingProduct/ListingProduct'

const Listing = () => {
 
     const { productData} = useContextProvider()

    return (
        <Box padding={2}  >
            <div className="ListingPage">
                <h1>Home Decor</h1>
                <ul>
                    <li>
                        <Link className='Link' >Home</Link>
                    </li>
                    <li>
                        <Link className='Link' >Shop</Link>
                    </li>
                    <li>
                        <Link className='Link' >Decor</Link>
                    </li>
                </ul>
            </div>



            <div className="listingData">
                <Grid2 container >
                    <Grid2 className={'sidebar1'} size={{ xs: 12, md: 2 }} >
                        <div className="sidebarWrapper">
                            <SideBar />
                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 10 }}  >
                        {/* <Product data={productData} /> */}
                        <ListingProduct/>
                    </Grid2>
                </Grid2>
            </div>


        </Box>
    )
}

export default Listing