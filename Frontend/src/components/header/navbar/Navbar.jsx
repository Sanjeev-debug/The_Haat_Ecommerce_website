import React, { useState } from 'react'
import {Box, Button, ClickAwayListener, Grid2, Icon, Paper, Typography, useScrollTrigger} from '@mui/material'
import { green } from '@mui/material/colors'
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link, NavLink } from 'react-router'
import HeadsetIcon from '@mui/icons-material/Headset';
import MegaMenu from '../../megaMenu/MegaMenu';
import BrowseCategory from '../../browseCategoryData/BrowseCategory';



const Navbar = () => {
  const [openCategoryDrop,setOpenCategoryDrop]=useState(false)
  const [openMega,setOpenMega]=useState(false)


  const navbarData=[
    {name:'Home',route:'/'},
    {name:'Shop',route:'/listing'},
    {name:'Venders',route:'/venders'},
    {name:'MegaMenu',iconDown:<ArrowDropDownIcon/>,iconUp:<ArrowDropUpIcon/>,open:openMega,setOpen:setOpenMega},
    {name:'About',route:'/about'},
    {name:'Contact',route:'/contact'},
  ]
  return (
    <>
    <Box component={Paper} elevation={1} sx={{mt:1}} >
      <Grid2 container columnSpacing={2} sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',position:'relative'}} >
          <Grid2 size={{md:4,lg:2}} sx={{display:'flex',justifyContent:'center',flexWrap:'nowrap'}} >

           <Button variant='contained' onClick={()=>setOpenCategoryDrop(!openCategoryDrop)}  sx={{color:'white',background:green[700],textTransform:'capitalize'}} ><GridViewIcon/> &nbsp;Browse All Category &nbsp; {openCategoryDrop ?<ArrowDropUpIcon/> :<ArrowDropDownIcon/>} </Button>
          </Grid2>
         {openCategoryDrop && <BrowseCategory setOpenCategoryDrop={setOpenCategoryDrop} />}
          
          <Grid2 size={{xs:12,md:6,lg:8}} sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',textAlign:'center'}} >
              {
                navbarData.map((item,index)=>{
                return item.iconUp ? <Button sx={{color:green[500],textTransform:'capitalize'}} key={index} onClick={()=>item.setOpen(!item.open)}  >{item.name}&nbsp;{item.open?item.iconUp :item.iconDown}</Button> : <Button key={index} ><NavLink style={{textDecoration:'none',color:green[500],textTransform:'capitalize'}} to={item.route} >{item.name}</NavLink></Button>})
                 }
           
           

          </Grid2>
           {openMega &&  <MegaMenu setOpenMega={setOpenMega} />}
           


          <Grid2  size={{md:2,lg:2}} sx={{display:'flex',justifyContent:'flex-start',alignItems:'center'}} >
            <Icon><HeadsetIcon/></Icon>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',flexWrap:'nowrap'}} >
            <Typography variant='h6' color={green[500]} >1900-888-222</Typography>
            <Typography variant='caption' >24X7 Survice</Typography>
            </Box>
          </Grid2>
      </Grid2>
    </Box>
    </>
  )
  
}

export default Navbar