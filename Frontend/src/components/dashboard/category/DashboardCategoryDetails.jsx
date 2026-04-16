import { Box, Grid2, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const DashboardCategoryDetails = () => {

const {dashboardProductDetails}=useContextProvider()


  return (
    <>
    <Box>
        <Grid2 container spacing={3}>
          <Grid2 component={Paper } elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <p style={{ fontSize: '20px' }} > Category View</p>
            <div >
              <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
            </div>
          </Grid2>
          <Grid2 size={{xs:12}} sx={{display:'flex',justifyContent:'space-evenly'}} >
            <img style={{width:'30%',height:'300px',borderRadius:'2px ',boxShadow:'0px 0px 0px 0.5px',padding:2}}  src={dashboardProductDetails.file} alt="" />
           <div>
           <h1 style={{color:'rgb(28, 21, 63)', marginBottom:'20px'}} >Name : {dashboardProductDetails.categoryName}</h1>
           <h3 style={{color:'rgb(32, 222, 10)', marginBottom:'20px'}} >Color : {dashboardProductDetails.categoryBackgroundColor}</h3>
           <h3>Id : {dashboardProductDetails._id}</h3>
           </div>
          </Grid2>

        </Grid2>
        </Box>
    
    </>
  )
}

export default DashboardCategoryDetails