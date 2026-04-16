import { Box, ClickAwayListener, Grid2, ListItem, Paper, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import { useContextProvider } from '../../contextProvider/ContextProvider'
import ListMenu from '../listMenu/ListMenu'
import MallImage from '../../image/sale.avif'

const MegaMenu = ({setOpenMega}) => {
  const {womenCollection,kidsWear,homeDecors }=useContextProvider()
  return (
   <>
   <ClickAwayListener onClickAway={()=>setOpenMega(false)} >
   <Box component={Paper} elevation={24} sx={{position:'absolute',top:55,left:'',zIndex:10  ,padding:1}} width={'100%'}  >
    <Grid2 container columnSpacing={3} rowSpacing={2} columns={10} sx={{padding:1,display:'flex',justifyContent:'space-evenly'}} >
        <Grid2  component={Paper} elevation={12} size={{xs:10,md:2}} padding={2} >
          <Typography variant='h5' sx={{color:'#22f229',borderRadius:'5px'}} >Women Collection</Typography>
          
          <ListMenu data={womenCollection} />
        </Grid2>
        <Grid2 component={Paper} elevation={12} size={{xs:10,md:2}} padding={2} >
        <Typography variant='h5' sx={{color:'#22f229',borderRadius:'5px'}} >kids Wears</Typography>
        <ListMenu data={kidsWear} />
        </Grid2>

        <Grid2 component={Paper} elevation={12} size={{xs:10,md:2}} padding={2} >
        <Typography variant='h5' sx={{color:'#22f229',borderRadius:'5px'}} >Home decors</Typography>
        <ListMenu data={homeDecors} />
        </Grid2>

        <Grid2 component={Paper} elevation={12} size={{xs:10,md:3,lg:3}} sx={{backgroundImage:`url(${MallImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} >
         
        </Grid2>

       
    </Grid2>
   </Box>
   </ClickAwayListener>
   </>
  )
}

export default MegaMenu