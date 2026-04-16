import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Link, Outlet, useNavigate } from 'react-router'
import { Avatar, Grid2, IconButton, Paper, Stack, Badge } from '@mui/material'
import Haat from '../../image/The.png'
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Sanjeev from '../../image/review/1.jpg'
import DashboardMenu from './menu/DashboardMenu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LockResetIcon from '@mui/icons-material/LockReset';
import DashboardSidebar from './sidebar/DashboardSidebar'
import { useContextProvider } from '../../contextProvider/ContextProvider'


const Dashboard = () => {

  const Navigate=useNavigate();
  const {allOrderData,setIsDashboardLogin}=useContextProvider();
  const [loginBoolean,setLoginBoolean]=useState(false)
  const handleLogOut=()=>{
    
    setIsDashboardLogin(false);
      Navigate('/');
  }


  let account = [
    {
      icon: <AccountCircleIcon />,
      title: 'Account',
      handle:''
    },
    {
      icon: <LockResetIcon />,
      title: 'Reset Password',
      handle:''
    },
    {
      icon: <Logout />,
      title: 'Logout',
      handle: handleLogOut
    },
  ]
 
  let notification = [

    {
      notificationImg: Sanjeev,
      name: 'Sanjeev',
      msg: 'Add new Product in cart',
      time: 'few second ago'

    },
    {
      notificationImg: Sanjeev,
      name: 'Sanjeev',
      msg: 'Add new Product in cart',
      time: 'few second ago'

    },
    {
      notificationImg: Sanjeev,
      name: 'Sanjeev',
      msg: 'Add new Product in cart',
      time: 'few second ago'

    },
    {
      notificationImg: Sanjeev,
      name: 'Sanjeev',
      msg: 'Add new Product in cart',
      time: 'few second ago'

    },
    {
      notificationImg: Sanjeev,
      name: 'Sanjeev',
      msg: 'Add new Product in cart',
      time: 'few second ago'

    },

  ]


  const [openAccount, setOpenAccount] = React.useState(null);
  const [openCart, setOpenCart] = React.useState(null);
  const [openMail, setOpenMail] = React.useState(null);
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openSidebar, setOpenSidebar] = useState(false)


  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)

  }


  const handleClickAccount = (event) => {
    setOpenAccount(event.currentTarget);
  };
  const handleClickCart = (event) => {
    setOpenCart(event.currentTarget);
  };
  const handleClickMail = (event) => {
    setOpenMail(event.currentTarget);
  };
  const handleClickNotiFication = (event) => {
    setOpenNotification(event.currentTarget);
  };

  return (
    <>
      <div className="dashboardMain">
        <Grid2 container  >


          <Grid2 size={12} >
            <div className='dashboardHeader'>
              <Grid2 container columns={15} spacing={2} >
                <Grid2 size={{ xs: 3 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                  <img style={{ width: '100px', height: '50px', objectFit: '100%' }} src={Haat} alt="" />
                  <IconButton onClick={handleSidebar} sx={{ width: 50, height: 50, borderRadius: '50%', background: '#dddada' }} ><ViewHeadlineOutlinedIcon /></IconButton>
                </Grid2>
                <Grid2 size={{ xs: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                  <div className="dashboardSearch">
                    <SearchIcon />
                    <input type="text" placeholder='Search here...' />
                  </div>
                </Grid2>
                <Grid2 size={{ xs: 6 }} sx={{}}>
                  <div className='dashboardIcon' >
                    <IconButton className='icon' > <LightModeIcon /></IconButton>
                    <IconButton onClick={(e) => handleClickCart(e)} className='icon' >
                    <Badge badgeContent={allOrderData?.length} color="error" max={10} showZero >
                       <ShoppingCartOutlinedIcon />
                    </Badge>
                       </IconButton>
                      
                    <IconButton onClick={(e) => handleClickMail(e)} className='icon' >
                    <Badge badgeContent={0} color="error" max={10} showZero >
                       <MailOutlineOutlinedIcon />
                    </Badge>
                       </IconButton>
                    
                    <IconButton onClick={(e) => handleClickNotiFication(e)} className='icon' >
                    <Badge badgeContent={notification?.length} color="error" max={10} showZero >
                       <NotificationsOutlinedIcon />
                       </Badge>
                       
                       </IconButton>
                    <DashboardMenu opendrop={openNotification} setOpendrop={setOpenNotification} data={notification} />
                    <div onClick={(e) => handleClickAccount(e)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', cursor: 'pointer' }} >
                      <Stack sx={{ border: '2px solid #52d00a', padding: '2px', borderRadius: '50%' }} >
                        <Avatar src={Sanjeev} ></Avatar>
                      </Stack>
                      <div>
                        <h3>Sanjeev</h3>
                        <p style={{ fontSize: '12px' }}>@Sanjeev63</p>
                      </div>
                    </div>
                    <DashboardMenu opendrop={openAccount} setOpendrop={setOpenAccount} data={account} />

                  </div>
                </Grid2>
              </Grid2>
            </div>
          </Grid2>

        </Grid2 >
      </div >
      <div className='dashboardPages' style={{ position: 'relative' }} >
        <DashboardSidebar openSidebar={openSidebar} />
        <div className={`dashboardContent ${openSidebar ? 'dashboardContent1' : ""}`} >

          <Outlet />
        </div>
      </div>
    </>

  )
}

export default Dashboard