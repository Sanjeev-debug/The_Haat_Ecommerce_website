import { Box, Button, Grid2, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DashboardSelectBox from '../dashboardInfoBox/selectBox/DashboardSelectBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import ImageUpload from '../../imageUpload/ImageUpload';
import { useContextProvider } from '../../../contextProvider/ContextProvider';


const CategoryUpload = () => {

    const { categoryData, setCategoryData,setUploadCategoryImage ,handleCategoryUpload,setDashboardProductDetails,dashboardProductDetails,showEditText} = useContextProvider()

    const handleCategoryData = (e) => {
        if(showEditText){
    setDashboardProductDetails({...dashboardProductDetails,[e.target.name]:e.target.value})
        }else{
            setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
        }
    }
    const selectBackgroundColor = [
        { title: 'light Red', value: ' #fdbfbb' },
        { title: 'light Green', value: ' #adf6aa' },
        { title: 'light Yellow', value: ' #fff666' },
        { title: 'light Blue', value: ' #b4dafd' },
        { title: 'light Cream', value: ' #fbf0b4' },

    ]


    return (
        <>
            <Box>
                <form className='productUploadForm'   >
                    <Grid2 container spacing={3} >
                        <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                            <p style={{ fontSize: '20px' }} >{showEditText?'Edit Category':'Upload Category'} </p>
                            <div >
                                <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
                            </div>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2} p={2} mt={4} >
                        <Grid2 size={{ xs: 12, md: 12 }} component={Paper} elevation={6} p={2} >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }} >
                                <h2 style={{ color: 'rgb(16, 15, 82)' }} >Category Information</h2>
                                <MoreHorizIcon />
                            </div>
                            <Grid2 container spacing={2} >
                                <Grid2 size={{ xs: 12, md: 6 }} >
                                    <h4 style={{ marginBottom: '10px' }} >CATEGORY-NAME</h4>
                                    <input onChange={(e) => handleCategoryData(e)} name='categoryName' value={showEditText?dashboardProductDetails.categoryName: categoryData.categoryName} type="text" style={{ width: '100%', padding: 5, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                                </Grid2>

                                <Grid2 size={{ xs: 12, md: 6 }} >
                                    <h4 style={{ marginBottom: '10px' }} >CATEGORY-BACKGROUND-COLOR</h4>
                                    <DashboardSelectBox data={selectBackgroundColor} handleChange={handleCategoryData} name='categoryBackgroundColor' />
                                </Grid2>

                            </Grid2>
                            <Grid2 container spacing={2} py={2}>
                                <Grid2 size={{ xs: 12, md: 12 }} component={Paper} elevation={6} p={2} sx={{ display: 'flex', gap: 2 }} >
                                    
                                        
                                            <div className='imageUploadShow'  >
                                                <div className='imageClose'>< ClearOutlinedIcon /></div>
                                                <div className='imageUploadchild'>
                                                    <LazyLoadImage
                                                        className='lazyImage'
                                                        effect='blur'
                                                        wrapperProps={{

                                                            style: { transitionDelay: "1s" },
                                                        }}
                                                        alt={'image Loading...'}

                                                        src='jhkj'
                                                    />
                                                </div>
                                            </div>
                                       

                                    {/* <ImageUpload multiple={false} name='singleFile' /> */}
                                    <div className='imageUploadMain'>
                                        <PermMediaOutlinedIcon />
                                        <p>Image Upload</p>
                                        <input  type="file" name='categoryImage'  style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0 }} onChange={(event) => setUploadCategoryImage(event.target.files[0])} />

                                    </div>
                                </Grid2>
                            </Grid2>
                            <Grid2 container spacing={2}  >
                                <Grid2 size={{ xs: 12, md: 12 }} sx={{ mt: 2 }} >
                                    <Button onClick={(e) =>handleCategoryUpload(e) } sx={{ width: '100%', background: 'rgb(61, 215, 44)', color: 'white' }} >Upload</Button>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </form>
            </Box>

        </>
    )
}

export default CategoryUpload