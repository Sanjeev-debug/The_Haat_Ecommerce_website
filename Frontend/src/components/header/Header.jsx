import React, { useState } from 'react'
import './Header.css'
import {Avatar, Box, Button, Grid, Grid2, Icon, IconButton, Paper, paperClasses, Stack, TextField, Typography} from '@mui/material'
import { NavLink, useNavigate } from 'react-router'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import The from '../../image/The.png'
import { green, lightGreen } from '@mui/material/colors';
import Navbar from './Navbar/Navbar';
import { useContextProvider } from '../../contextProvider/ContextProvider';
import MyAccount from '../myAccount/MyAccount';




const Header=()=>{
   const Navigate=useNavigate()
   
    const {isDashboardLogin,openAccountList,setOpenAccountList,user,setUser,refressCart,setRefressCart,setSearch,search,filterDataBySearch}= useContextProvider()

   const userLogOut=()=>{
      setUser('');
      setOpenAccountList(false);
   }
   const myAccount=()=>{
      Navigate('/myAccount');
      setOpenAccountList(false);
   }
   const myOrder=()=>{
      Navigate('/myOrder');
      setOpenAccountList(false);
   }
   
   const searchProduct=()=>{
      filterDataBySearch(search)
   }
 
   

    return( 
        <div style={{position:'sticky',top:'-70px',zIndex:1000,background:'white',transition:'all .3s linear'}}  >
        <Box   component={Paper} padding={1} >
          <Grid2  container  columnSpacing={2} sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >
          <Grid2 size={{xs:2,md:1,lg:1}} >
             <Box ><img className='logo' src={The} alt="Loading..." /> </Box>
             </Grid2>
            
           <Grid2 size={{xs:10,md:7,lg:6}} >
           <Box className='searchInput' sx={{ border:'1px solid rgb(13, 244, 98)',borderRadius:'5px',display:'flex',justifyContent:'space-evenly'}} >
              
              
             
              <TextField  sx={{width:'90%',ml:2,color:lightGreen[500]}}  variant='standard'  placeholder='Search for items...' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
              <IconButton sx={{width:'5%'}} onClick={()=>searchProduct()}  >
                   <SearchIcon sx={{color:green[500]}} />
              </IconButton>
                
            </Box>
           </Grid2>
            <Grid2  size={{xs:12,md:4,lg:3}} >
            <Box sx={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center'}} >

            {
              ( user!=='')
              
                ? <Button  onClick={()=>setOpenAccountList(true)}  sx={{color:green[500],textTransform:'capitalize'}} ><PermIdentityIcon/>{user.name}   </Button>
                : <Button   onClick={()=>Navigate('/userSignIn')} sx={{color:green[500],textTransform:'capitalize'}} ><PermIdentityIcon/>  SignIn  </Button>
           
           }    
             
                
             
             
             {openAccountList && 
               <div style={{position:'absolute',top:50,left:30,zIndex:1}} >
                  <ClickAwayListener onClickAway={()=>setOpenAccountList(false)} >
                  <Box component={Paper} elevation={12}  >
                   <ul style={{listStyle:'none',padding:'5px'}} >
                       <li className='accountdrop'  ><Button sx={{color:'#000',width:'100%',justifyContent:'flex-start'}}  onClick={()=>myAccount()} ><AccountCircleIcon/> &nbsp; My Account </Button></li>
                       <li className='accountdrop'  ><Button sx={{color:'#000',width:'100%',justifyContent:'flex-start'}}  onClick={()=>myOrder()} ><PersonPinCircleIcon/> &nbsp; Order Tracking </Button></li>
                       <li className='accountdrop'  ><Button onClick={()=>userLogOut()} sx={{color:'#000',width:'100%',justifyContent:'flex-start'}} ><LogoutIcon/> &nbsp; LogOut</Button> </li>
                   </ul>
                   </Box> 
                  </ClickAwayListener>
                  
                 
                   
               </div>
               } 

               <Button onClick={()=>setRefressCart(!refressCart)} title='Cart'  >   <NavLink  style={{textDecoration:'none' ,display:'flex',justifyContent:'space-between',alignItems:'center',color:green[500]}} to={'/cart'} > <ShoppingCartIcon/> Cart</NavLink></Button>
               
              <Stack>
               <Avatar sx={{background:green[200] }} >
               <IconButton title='Admin'  >
                  <NavLink to={isDashboardLogin ? '/dashboardHome' :'/adminLogin'} > <AdminPanelSettingsIcon sx={{color:green[500]}} /></NavLink>
               </IconButton>
               </Avatar>
              </Stack>
           </Box>
            </Grid2>
          </Grid2>
                    

        </Box>
        <Navbar/>
       
        </div>
    )

}

export default Header