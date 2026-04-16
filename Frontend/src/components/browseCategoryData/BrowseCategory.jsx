import React from 'react'
import {Box, ClickAwayListener, Grid2, Paper, Typography} from '@mui/material'
import { useContextProvider } from '../../contextProvider/ContextProvider'


const BrowseCategory = ({setOpenCategoryDrop}) => {
    const { allCategoryData } = useContextProvider()
    console.log(allCategoryData)
  return (
    <>
       <ClickAwayListener onClickAway={()=>setOpenCategoryDrop(false)} >
    <Box sx={{width:'40%',position:'absolute',top:'55px',left:'10px',background:'rgb(22, 134, 52)'}} component={Paper} elevation={3} padding={2}  >

      <Grid2 container spacing={2}  >
        {
          allCategoryData?.length >0 &&
          allCategoryData?.map((item,index)=>(
            <Grid2 key={index} size={{xs:4}} padding={2} component={Paper} sx={{ display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
              <img src={item.file} alt="" style={{width:'75px',height:'75px',borderRadius:'5px',border:'1px solid rgb(180, 177, 177)'}} />
              <Typography sx={{color:'rgb(17, 37, 84)'}} >{item.categoryName}</Typography>
            </Grid2>
          ))
        }
        
      </Grid2>

    </Box>
    </ClickAwayListener>
    </>
  )
}

export default BrowseCategory