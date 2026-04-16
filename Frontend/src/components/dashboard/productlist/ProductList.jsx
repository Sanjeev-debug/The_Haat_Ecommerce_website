
import React from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'

import { Box, Button, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import DashboardSelectBox from '../dashboardInfoBox/selectBox/DashboardSelectBox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Saree1 from '../../../image/saree/1.webp'


import HomeIcon from '@mui/icons-material/Home';

import ProductListBox from './productListBox/ProductListBox';
import { useContextProvider } from '../../../contextProvider/ContextProvider'

const ProductList = () => {
  const { setDashboardProductDetails, allProductData, setShowEditText, dashboarProductDelete ,allUser,allCart} = useContextProvider()

  const selectCategory = [
    {
      value: 'men',
      title: 'Men'
    },
    {
      value: 'women',
      title: 'Women'
    },
    {
      value: 'kidsWear',
      title: 'Kids-Wear'
    },
    {
      value: 'electronic',
      title: 'Electronic'
    },
    {
      value: 'homeDecor',
      title: 'Home-Decor'
    },
  ]
  const dashboarProductDatailsEdit = (row) => {
    setShowEditText(true)
    setDashboardProductDetails(row)

  }


  const dashboardProductDetails = (productDetailsRow) => {
    setDashboardProductDetails(productDetailsRow)
  }
  return (
    <>
      <Box>
        <Grid2 container spacing={3} >
          <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <p style={{ fontSize: '20px' }} > Product List</p>
            <div >
              <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
            </div>
          </Grid2>

        </Grid2>
        <Grid2 container spacing={3} mt={4}  >
          <Grid2 size={{ xs: 12, md: 4 }}  >
            <ProductListBox color={['#106929 ', '#18bd41']} num={1} title={'Products'}  total={allProductData.length} />

          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}  >
            <ProductListBox color={['#d50d8c ', '#f45dd5']} num={2} title={'Users'}  total={allUser?.length} />

          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }} >
            <ProductListBox color={['#0d38d5 ', '#5d92f4']} num={3} title={'Cart'} total={allCart?.length} />

          </Grid2>


        </Grid2>
      </Box>
      <Box component={Paper} elevation={6} padding={2} sx={{ mt: '50px' }} >
        <Grid2 container spacing={2} >
          <Grid2 sx={{ display: 'flex', justifyContent: 'space-between' }} size={{ xs: 12 }} >
            <Typography variant='h4'>Best Selling Products</Typography>
            <MoreHorizOutlinedIcon />
          </Grid2>
          <Grid2 container size={{ xs: 12 }} >
            
            <Grid2 size={{ xs: 12, md: 6, lg: 3 }} >
              <Typography variant='h6'>SEARCH BY </Typography>
              <TextField color='success' sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} size='small' fullWidth placeholder='id/name/category/brand' />
            </Grid2>
          </Grid2>


        </Grid2>
        <Grid2 container >
          <Grid2 size={{ xs: 12 }} >
            <TableContainer sx={{ mt: 3, maxHeight: 500, position: 'relative' }} >
              <Table className='dashboardTable'  >
                <TableHead sx={{ background: '#0be072', position: 'sticky', top: 0, zIndex: 100 }}  >
                  <TableRow>
                    <TableCell align="center" >SN.</TableCell>
                    <TableCell align="center" >PRODUCT</TableCell>
                    <TableCell align="center" >CATEGORY</TableCell>
                    <TableCell align="center" >SUB-CATEGORY</TableCell>
                    <TableCell align="center" >BRAND</TableCell>
                    <TableCell align="center" >PRICE</TableCell>
                    <TableCell align="center" >STOCK</TableCell>
                    <TableCell align="center" >RATING</TableCell>

                    <TableCell align="center" >ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allProductData.length > 0 &&
                    allProductData.map((row, index) => (
                      <TableRow key={index} >
                        <TableCell align="center" ><h2>{index + 1}</h2></TableCell>
                        <TableCell align="center" >
                          <div style={{ display: 'flex', alignItems: 'center' }} >
                            <img style={{ width: '70px', height: '70px' }} src={row.files[0]} alt="" />
                            <h4>{row.description}</h4>
                          </div>
                        </TableCell>
                        <TableCell align="center" ><h3>{row.category}</h3></TableCell>
                        <TableCell align="center" ><h3>{row.subCategory}</h3></TableCell>
                        <TableCell align="center" ><h3>{row.brand}</h3></TableCell>
                        <TableCell align="center" >
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <del><CurrencyRupeeOutlinedIcon className='rupee' />{row.regularPrice}</del>
                            <h4><CurrencyRupeeOutlinedIcon className='rupee' />{row.disCountPrice}</h4>
                          </div>
                        </TableCell>
                        <TableCell align="center" ><h4>{row.productStock}</h4></TableCell>
                        <TableCell align="center" ><h4>{row.rating}</h4></TableCell>


                        <TableCell align="center"  >
                          <Link to={'/dashboardProductDetails'} > <Button className='secundaryColor' onClick={() => dashboardProductDetails(row)}  ><RemoveRedEyeIcon color='secondary' /></Button></Link>
                          <Link to={'/dashboardProductUpload'} ><Button className='successColor' onClick={() => dashboarProductDatailsEdit(row)} ><CreateSharpIcon color='success' /></Button></Link>
                          <Button className='errorColor' onClick={() => dashboarProductDelete(row._id)}  ><DeleteIcon color='error' /></Button>
                        </TableCell>
                      </TableRow>
                    ))
                  }


                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }} >
              <p>Showing <b>10</b> of <b>{allProductData.length}</b> result   </p>
              <Pagination count={allProductData.length} color="primary" showFirstButton showLastButton />

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

export default ProductList



