import React, { useState } from 'react'
import './DashboardSidebar.css'
import { Box, Button, Paper } from '@mui/material'
import { useNavigate } from 'react-router'
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContextProvider } from '../../../contextProvider/ContextProvider'


const Navlinks = [
    {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        path:'/dashboardHome'
    },
    {
        label: 'Categories',
        icon: <SettingsIcon />,
        children: [
            {
                label: 'Categories List',
                path: '/dashboardCategoryList',

            },
            {
                label: 'Category Upload',
                path: '/dashboardCategoryUpload',

            },
            

        ]
    },
    {
        label: 'Products',
        icon: <LocalParkingOutlinedIcon />,
        children: [
            {
                label: 'Product List',
                path: '/dashboardProductList',

            },
            {
                label: 'Product View',
                path: '/#',

            },
            {
                label: 'Product UpLoad',
                path: '/dashboardProductUpload',

            },

        ]
    },
    {
        label: 'Order',
        icon: <ShoppingCartIcon />,
        children: [
            {
                label: 'Order Details',
                path: '/dashboardOrder',

            },
            

        ]
    },
   
    {
        label: 'Notification',
        icon: <NotificationsIcon />,
        children: [
            {
                label: 'New Notification',
                path: '/Students',

            },
           

        ]
    },
    {
        label: 'Settings',
        icon: <SettingsIcon />,
        children: [
            {
                label: 'Setting',
                path: '/#',

            },
            

        ]
    },

]

const DashboardSidebar = ({ openSidebar }) => {
    const Navigate=useNavigate()
   
    const {setIsDashboardLogin}= useContextProvider()

    return (

        <Box component={Paper} elevation={3} className='dashboardSidebar' sx={{display:'flex',flexDirection:'column',justifyContent:'space-between', height: '88vh', width: '20%', position: 'fixed', left: openSidebar ? '-20%' : 0 }} >
            <List  >
                {
                    Navlinks.map((link, index) => (
                        <DashboardSidebarList key={index} links={link} />
                    ))

                }
            </List>
            <Button className='sidebarButton' sx={{mb:2,p:2,textTransform:'capitalize'}}
             onClick={async()=>{
                await setIsDashboardLogin(false)
                 Navigate('/')

            }}  >
                <LogoutIcon/>LogOut</Button>

        </Box>

    )
}

export default DashboardSidebar


const DashboardSidebarList = ({ links }) => {

    
    const {setShowEditText}= useContextProvider()
    
    
    const Navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <ListItem disablePadding>
                <ListItemButton onClick={() => links.children ? setIsOpen(!isOpen) : Navigate(links.path)} >
                    <ListItemIcon>
                        {links.icon}
                    </ListItemIcon>
                    <ListItemText primary={links.label} />
                    {links.children && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
            </ListItem>

            <Divider />
            {
                links.children && (
                    <Collapse in={isOpen} >
                        <List sx={{ ml: 3 }} >
                            {
                                links.children.map((child, index) => (
                                    <ListItem disablePadding divider key={index}>
                                        <ListItemButton onClick={() =>{setShowEditText(false);
                                            Navigate(child.path); }} >
                                            <ListItemIcon>
                                                {child.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={child.label} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Collapse>
                )
            }

        </>
    )
}

