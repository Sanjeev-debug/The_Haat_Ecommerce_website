import React from 'react'
import './DashboardMenu.css'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import IconButton from '@mui/material/IconButton';
import { Avatar, Button } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';





const DashboardMenu = ({ opendrop, setOpendrop, data }) => {




  const open = Boolean(opendrop);

  const handleClose = () => {
    setOpendrop(null);
  };
  return (
    
    
    
    
      <Menu
         className='dashboardnotification'
        anchorEl={opendrop}
        id="account-menu"
        
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                '&[aria-hidden="true"]': {
          inert: true, // isse focus ko disable karne ki koshish ki gayi hogi
        },
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        {

          data.map((item, index) => (

            (item.notificationImg
              ?
              <MenuItem  sx={{width:'270px'}} key={index} onClick={handleClose}>
              <div className='notificationBox' style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                <img style={{width:'50px',height:'50px',objectFit:"cover",borderRadius:'50%',border:'2px solid #52d00a',padding:2}} src={item.notificationImg} alt="" />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.msg}</p>
                  <h6 style={{color:'blue'}} >{item.time}</h6>
                </div>
              </div>
              </MenuItem>
              :
             
                <MenuItem key={index} onClick={() => { 
                  if (typeof item.handle === 'function') item.handle(); 
                  handleClose(); 
                }}>

                 
                 <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  {item.title}
                
                </MenuItem>
            )

          ))
        }



      </Menu>

    
  )
}

export default DashboardMenu