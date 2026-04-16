import { Box, Button, Grid2, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ProductListBox from '../productlist/productListBox/ProductListBox'

import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const CategoryList = () => {
    const Navigate=useNavigate()

   const {allCategoryData,dashboarCategoryDelete,setShowEditText ,setDashboardProductDetails}=useContextProvider()
   
   const dashboarCategorytDatails=async(row)=>{
    
    await setDashboardProductDetails(row);
    Navigate('/dashboardCategoryDetails')

}

const dashboardCategoryDatailsEdit=(row)=>{
    setShowEditText(true)
    setDashboardProductDetails(row)
    Navigate('/dashboardCategoryUpload')
}


    return (
        <>
            <Box>
                <Grid2 container spacing={3} >
                    <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <p style={{ fontSize: '20px' }} > Category List</p>
                        <div >
                            <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
                        </div>
                    </Grid2>

                </Grid2>
                <Grid2 container spacing={3} mt={4}  >
                    <Grid2 size={{ xs: 12, md: 4 }}  >
                        <ProductListBox color={['#106929 ', '#18bd41']} num={1} title={'All Category'} total={allCategoryData?.length} />

                    </Grid2>
                </Grid2>
                <Grid2 container >
                    <Grid2 size={{ xs: 12 }} >
                        <TableContainer sx={{ mt: 3, maxHeight: 500, position: 'relative' }} >
                            <Table className='dashboardTable'  >
                                <TableHead sx={{ background: '#0be072', position: 'sticky', top: 0, zIndex: 100 }}  >
                                    <TableRow>
                                        <TableCell align="center" >SN.</TableCell>
                                        <TableCell align="center" >PRODUCT-IMAGE</TableCell>
                                        <TableCell align="center" >PRODUCT-TITLE</TableCell>
                                        <TableCell align="center" >COLOR</TableCell>
                                        <TableCell align="center" >ACTION</TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {allCategoryData.length>0 &&
                                    allCategoryData.map((row, index) => (
                                        <TableRow key={index} >
                                            <TableCell align="center" ><h2>{index + 1}</h2></TableCell>
                                            <TableCell align="center" >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <img style={{ width: '70px', height: '70px' }} src={row.file} alt="" />
                                                    
                                                </div>
                                            </TableCell>
                                            <TableCell align="center" ><h3>{row.categoryName}</h3></TableCell>
                                            <TableCell align="center" ><h3>{row.categoryBackgroundColor}</h3></TableCell>
                                            <TableCell align="center" >
                                                <Button className='secundaryColor' onClick={() => dashboarCategorytDatails(row)}  ><RemoveRedEyeIcon color='secondary' /></Button>
                                                <Button className='successColor' onClick={()=>dashboardCategoryDatailsEdit(row)} ><CreateSharpIcon color='success'   /></Button>
                                                <Button className='errorColor' onClick={()=>dashboarCategoryDelete(row._id)} ><DeleteIcon color='error' /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }} >
                            <p>Showing <b>12</b> of <b>60</b> result   </p>
                            <Pagination count={50} color="primary" showFirstButton showLastButton />

                        </div>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default CategoryList




