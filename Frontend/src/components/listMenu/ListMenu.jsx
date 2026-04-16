import { Box, List, ListItem,  Paper } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './listMenu.css'

const ListMenu = ({data}) => {
    
  return (
    <>
    <Box   >
        <List  >
                {
                    data.map((list,index)=>{
                        return <ListItem  className='listItem' key={index} ><NavLink style={{textDecoration:'none',color:'black'}} to={list.route} >{list.item}</NavLink></ListItem>
                    })
                }
        </List>
    </Box>
    </>
  )
}

export default ListMenu