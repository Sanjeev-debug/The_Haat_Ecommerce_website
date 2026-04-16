import React from 'react'
import Sliders from '../../components/slider/Sliders'
import CateSlider from '../../components/categorySlider/CateSlider'
import Banner from '../../components/banner/Banner'
import Product from '../../components/product/Product'
import { Box, Grid2, List, ListItem, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router'
import './Home.css'

import ProductSlider from '../../components/productSlider/ProductSlider'
import TopProductsSelection from '../../components/topProduct/TopProductsSelection'
import { useContextProvider } from '../../contextProvider/ContextProvider'




const Home = () => {

  const { productData, advanceData } = useContextProvider()

  return (
    <>
      
      <Sliders />
      <CateSlider />
      <Banner />

      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }} >
        <Typography variant='h4' >Popular Products</Typography>
        <List sx={{ display: 'flex', width: '35%', justifyContent: 'space-between', alignItems: 'center', padding: 0, flexWrap: 'wrap' }} >
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >All</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Woman Collection</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Kids Wear</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Home Decoration</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Electronics</NavLink></div>

        </List>
      </Box>

      <Product data={productData} />

      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }} >
        <Typography variant='h4' >Daily Best Sells</Typography>
        <List sx={{ display: 'flex', width: '20%', justifyContent: 'space-between', alignItems: 'center', padding: 0, flexWrap: 'wrap' }} >
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Featured</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >Popular</NavLink></div>
          <div className="popularProductLink"><NavLink className={'popularlink'} style={{ textDecoration: 'none ', color: 'black' }} >New Added</NavLink></div>
        </List>
      </Box>

      <ProductSlider data={productData} />

      <TopProductsSelection advanceData={advanceData} />


    </>
  )
}

export default Home