import { Box, Button, Grid2, Paper } from '@mui/material'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './ProductUpload.css'


import HomeIcon from '@mui/icons-material/Home';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardSelectBox from '../dashboardInfoBox/selectBox/DashboardSelectBox';
import Rating from '@mui/material/Rating';
import ImageUpload from '../../imageUpload/ImageUpload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import saree1 from '../../../image/saree/1.webp'
import saree2 from '../../../image/saree/2.webp'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useContextProvider } from '../../../contextProvider/ContextProvider';

const ProductUpload = () => {

  const { uploadData, setUploadData, fileUpload, setFileUpload, handleProductUpload, productImage,showEditText,dashboardProductDetails,setDashboardProductDetails} = useContextProvider()







  const handleChange = (e) => {
    if(showEditText){
      setDashboardProductDetails({...dashboardProductDetails,[e.target.name]:e.target.value})
    }else{
      setUploadData({ ...uploadData, [e.target.name]: e.target.value })
    }
  }









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
      value: 'cosmetic',
      title: 'Cosmetic'
    },
    {
      value: 'homeDecor',
      title: 'Home-Decor'
    },
  ]

  const selectColor = [
    {
      value: 'red',
      title: 'Red'
    },
    {
      value: 'colorFul',
      title: 'ColorFul'
    },
    {
      value: 'chocolate',
      title: 'Chocolate'
    },
    {
      value: 'maroone',
      title: 'Maroone'
    },
    {
      value: 'blue',
      title: 'Blue'
    },
    {
      value: 'white',
      title: 'White'
    },
    {
      value: 'green',
      title: 'Green'
    },
    {
      value: 'cream',
      title: 'Cream'
    },
    {
      value: 'pink',
      title: 'Pink'
    },
    {
      value: 'yellow',
      title: 'Yellow'
    },
    {
      value: 'black',
      title: 'Black'
    },
    {
      value: 'gray',
      title: 'Gray'
    },
  ]

  const selectSize = [
    {
      value: 'sm',
      title: 'SM'
    },
    {
      value: 'md',
      title: 'MD'
    },
    {
      value: 'lg',
      title: 'LG'
    },
    {
      value: 'xl',
      title: 'XL'
    },
    {
      value: 'xxl',
      title: 'XXL'
    },
    {
      value: '1',
      title: '1 kg'
    },
    {
      value: '2',
      title: '2 kg'
    },
    {
      value: '5',
      title: '5 kg'
    },
    {
      value: 'small',
      title: 'Small'
    },
    {
      value: 'medium',
      title: 'Medium'
    },
    {
      value: 'large',
      title: 'Large'
    },
  ]

  const selectSubCategory = [
    {
      value: 'shirt',
      title: 'Shirt'
    },
    {
      value: 'air_conditioner',
      title: 'Air Conditioner'
    },
    {
      value: 'fan',
      title: 'Fan'
    },
    {
      value: 'lighting',
      title: 'Lighting'
    },
    {
      value: 'pant',
      title: 'Pant'
    },
    {
      value: 'underGarments',
      title: 'Under Garments'
    },
    {
      value: 'perfume',
      title: 'Perfume'
    },
    {
      value: 'lipstick',
      title: 'LipStick'
    },
    {
      value: 'eye_liner',
      title: 'Eye Liner'
    },
    {
      value: 'makeupKit',
      title: 'MakeUp kit'
    },
    {
      value: 'flowerPot',
      title: 'Flower-Pot'
    },
    {
      value: 'photoFrame',
      title: 'Photo-Frame'
    },
    {
      value: 'saree',
      title: 'Saree'
    },
    {
      value: 'suit',
      title: 'Suit'
    },
  ]

  const selectBrand = [
    {
      value: 'gucci',
      title: 'Gucci'
    },
    {
      value: 'raymond',
      title: 'Raymond'
    },
    {
      value: 'siyarams',
      title: 'Siyarams'
    },
    {
      value: 'manish_malhotra',
      title: 'Manish_Malhotra'
    },
    {
      value: 'jaypore',
      title: 'Jaypore'
    },
    {
      value: 'adidas',
      title: 'Adidas'
    },
    {
      value: 'bone_china',
      title: 'Bone China'
    },
    {
      value: 'zara',
      title: 'Zara'
    },
    {
      value: 'apple',
      title: 'Apple'
    },
    {
      value: 'sony',
      title: 'Sony'
    },
    {
      value: 'samsung',
      title: 'Samsung'
    },
    {
      value: 'lg',
      title: 'LG'
    },
    {
      value: 'philips',
      title: 'Philips'
    },
    {
      value: 'havells',
      title: 'Havells'
    },
  ]
  return (
    <>
      <Box>
        <form className='productUploadForm' onSubmit={(e) => handleProductUpload(e)}  >
          <Grid2 container spacing={3} >
            <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
              <p style={{ fontSize: '20px' }} >{showEditText?'Product Edit':'Product Upload'}</p>
              <div >
                <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
              </div>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} p={2} mt={4} >
            <Grid2 size={{ xs: 12, md: 12 }} component={Paper} elevation={6} p={2} >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h2 style={{ color: 'rgb(16, 15, 82)' }} >Basic Information</h2>
                <MoreHorizIcon />
              </div>
              <Grid2 container spacing={2} >
                <Grid2 size={{ xs: 12, md: 12 }} >
                  <h4 style={{ marginBottom: '10px' }} >TITLE</h4>
                  <input onChange={(e) => handleChange(e)} name='title' value={showEditText?dashboardProductDetails.title: uploadData.title} type="text" style={{ width: '100%', padding: 5, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }} >
                  <h4 style={{ marginBottom: '10px' }}>DESCRIPTION</h4>
                  <textarea onChange={(e) => handleChange(e)} name='description' value={showEditText?dashboardProductDetails.description:uploadData.description} type="text" style={{ width: '100%', padding: 5, fontSize: '20px', height: '150px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >CATEGORY</h4>
                  <DashboardSelectBox data={selectCategory} handleChange={handleChange} name='category' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >SUB-CATEGORY</h4>
                  <DashboardSelectBox data={selectSubCategory} handleChange={handleChange} name='subCategory' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >BRAND</h4>
                  <DashboardSelectBox data={selectBrand} handleChange={handleChange} name='brand' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >COLOR</h4>
                  <DashboardSelectBox data={selectColor} handleChange={handleChange} name='color' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >SIZE/WEIGHT</h4>
                  <DashboardSelectBox data={selectSize} handleChange={handleChange} name='size' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >PUBLICED</h4>
                  <input onChange={(e) => handleChange(e)} name='publiced' value={showEditText?dashboardProductDetails.publiced:uploadData.publiced} type="text" style={{ width: '100%', padding: 10, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >REGULAR PRICE</h4>
                  <input onChange={(e) => handleChange(e)} name='regularPrice' value={showEditText?dashboardProductDetails.regularPrice:uploadData.regularPrice} type="text" style={{ width: '100%', padding: 10, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >DISCOUNT PRICE</h4>
                  <input onChange={(e) => handleChange(e)} name='disCountPrice' value={showEditText?dashboardProductDetails.disCountPrice:uploadData.disCountPrice} type="text" style={{ width: '100%', padding: 10, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >PRODUCT STOCK</h4>
                  <input onChange={(e) => handleChange(e)} name='productStock' value={showEditText?dashboardProductDetails.productStock:uploadData.productStock} type="text" style={{ width: '100%', padding: 10, fontSize: '20px', height: '55px', background: '#c7bfbf', outline: 'none ', border: 'none', borderRadius: '5px' }} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} >
                  <h4 style={{ marginBottom: '10px' }} >RATING</h4>
                  <Rating
                    name="rating"
                    value={showEditText?dashboardProductDetails.rating:uploadData.rating}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid2>

              </Grid2>
            </Grid2>


          </Grid2>
          <Grid2 container spacing={2} p={2}>
            <Grid2 size={{ xs: 12, md: 12 }} component={Paper} elevation={6} p={2} sx={{ display: 'flex', gap: 2 }} >
              {
                productImage.map((item, index) => (
                  <div className='imageUploadShow' key={index} >
                    <div className='imageClose'>< ClearOutlinedIcon /></div>
                    <div className='imageUploadchild'>
                      <LazyLoadImage
                        className='lazyImage'
                        effect='blur'
                        wrapperProps={{

                          style: { transitionDelay: "1s" },
                        }}
                        alt={'image Loading...'}

                        src={item}
                      />
                    </div>
                  </div>
                ))
              }

              <ImageUpload multiple={true} setFileUpload={setFileUpload} name='file' />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} textAlign={'center'} mt={'50px'} >
            <Grid2 size={{ xs: 12 }} >
              <Button className='productUploadBotton' type='submit' ><BackupOutlinedIcon /> &nbsp; Upload Product</Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
      <Box height={100} padding={5} mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
        <div style={{ width: "100%", height: '2px', background: ' #747070' }} ></div>
        <div style={{ width: "80%", height: '2px', background: ' #747070' }} ></div>
        <div style={{ width: "60%", height: '2px', background: ' #747070' }} ></div>
      </Box>
    </>

  )
}

export default ProductUpload