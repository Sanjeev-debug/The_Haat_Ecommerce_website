import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import './SideBar.css'
import { useContextProvider } from '../../contextProvider/ContextProvider'
import Images from '../../image/listingCategory/2.svg'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Banner from '../../image/banner/3.jpg'
import allProduct from '../../image/product/allProduct.jpg'



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
    return `${value}°C`;
}

const SideBar = () => {
    const { allCategoryData,filterProductData,filterData,priceFilter,setPriceFilter,filterPriceData,isAddProduct,setIsAddProduct } = useContextProvider()

  

    const handleChange = async(event, newValue) => {
     await   setPriceFilter(newValue);
        // filterPriceData(priceFilter);
    };

   
 
    return (
        <div className='sidebarMain' >
            <Box component={Paper} padding={2} mt={2} sx={{ boxSizing: 'border-box' }} >

                <div className="SideBarCard">
                    <h1>Category</h1>
                </div>
                <div >
                <div onClick={()=>setIsAddProduct(!isAddProduct)}  className='sidebarCardCategory'  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop: '10px', border: '1px solid #a5e8e8', borderRadius: '5px' }} >
                                <img style={{ width: '30px', height: '30px',borderRadius:'5px' }} src={allProduct} alt="" />
                                <p>All Prouct</p>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', lineHeight: "30px", background: '#88bec0' }} >30</div>
                            </div>

                    { allCategoryData.length>0 &&
                        allCategoryData.map((item, index) => (

                            <div onClick={()=>filterData(item)}  className='sidebarCardCategory' key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop: '10px', border: '1px solid #a5e8e8', borderRadius: '5px' }} >
                                <img style={{ width: '30px', height: '30px',borderRadius:'5px' }} src={item.file} alt="" />
                                <p>{item.categoryName}</p>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', lineHeight: "30px", background: '#88bec0' }} >30</div>
                            </div>

                        ))
                    }
                </div>



            </Box>
            <Box component={Paper} padding={2} mt={2} sx={{ boxSizing: 'border-box' }} >

                <div className="SideBarCard"  >
                    <h1 style={{ marginBottom: '10px' }} >Fill by price</h1>


                    <Slider
                        min={10}
                        max={3000}
                        getAriaLabel={() => 'Temperature range'}
                        value={priceFilter}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color='success'

                    />
                </div>
                <div className='sidebar2prices' style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <p>From: <span className='Sidebar2Price' >&#8377; {priceFilter[0]}</span> </p>
                    <p>To: <span className='Sidebar2Price' >&#8377; {priceFilter[1]}</span> </p>
                </div>

                <div className='sidebar2Filter'>
                    <h4>Color</h4>
                    <ul>
                        <li> <Checkbox {...label} color='success' />Red (56)</li>
                        <li> <Checkbox {...label} color='success' />Green (78)</li>
                        <li> <Checkbox {...label} color='success' />Blue (36)</li>
                        <li> <Checkbox {...label} color='success' />Red (56)</li>
                        <li> <Checkbox {...label} color='success' />Green (78)</li>
                        <li> <Checkbox {...label} color='success' />Blue (36)</li>
                        <li> <Checkbox {...label} color='success' />Red (56)</li>
                        <li> <Checkbox {...label} color='success' />Green (78)</li>
                        <li> <Checkbox {...label} color='success' />Blue (36)</li>
                        <li> <Checkbox {...label} color='success' />Red (56)</li>
                        <li> <Checkbox {...label} color='success' />Green (78)</li>
                        <li> <Checkbox {...label} color='success' />Blue (36)</li>
                    </ul>
                </div>
                <div className='sidebar2Filter'>
                    <h4>Item Condition</h4>
                    <ul>
                        <li> <Checkbox {...label} color='success' />New (1506)</li>
                        <li> <Checkbox {...label} color='success' />Refurbished (27)</li>
                        <li> <Checkbox {...label} color='success' />Used (45)</li>
                        <li> <Checkbox {...label} color='success' />New (1506)</li>
                        <li> <Checkbox {...label} color='success' />Refurbished (27)</li>
                        <li> <Checkbox {...label} color='success' />Used (45)</li>
                        <li> <Checkbox {...label} color='success' />New (1506)</li>
                        <li> <Checkbox {...label} color='success' />Refurbished (27)</li>
                        <li> <Checkbox {...label} color='success' />Used (45)</li>
                        <li> <Checkbox {...label} color='success' />New (1506)</li>
                        <li> <Checkbox {...label} color='success' />Refurbished (27)</li>
                        <li> <Checkbox {...label} color='success' />Used (45)</li>

                    </ul>
                </div>


                <Button className='button1'  ><FilterAltOutlinedIcon/>Filter</Button>  

            </Box>
            <img style={{borderRadius:'10px',marginTop:'10px'}}  src={Banner} alt="" />
        </div>
    )
}

export default SideBar