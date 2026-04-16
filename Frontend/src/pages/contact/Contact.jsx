import { Box, Grid2, Paper, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Box>
        <Grid2 container spacing={2} padding={2} component={Paper} elevation={12} margin={2} >
          <Grid2 size={{ xs: 12 }} sx={{ background: 'rgb(72, 232, 192)', borderRadius: '10px' }} p={2} >
            <h1 style={{ color: 'rgb(35, 34, 77)' }} >The Haat </h1>

          </Grid2 >
          <Grid2 size={{xs:12}} >
          <h2 style={{ color: 'rgb(72, 72, 75)' }} >Contact Us</h2>
          </Grid2>
          <Grid2 size={{xs:12}} >
            <Typography sx={{color:'rgb(31, 11, 75)',borderRadius:'50px' ,background:green[500],textAlign:'center'}} variant='h4' >Phone : 1122-998-895</Typography>
          </Grid2>
          <Grid2 size={{xs:12}} >
            <Typography sx={{color:'rgb(31, 11, 75)',borderRadius:'50px' ,background:green[500],textAlign:'center'}} variant='h4' >Mobile : +91 6397718886</Typography>
          </Grid2>
          <Grid2 size={{xs:12}} >
            <Typography sx={{color:'rgb(31, 11, 75)',borderRadius:'50px' ,background:green[500],textAlign:'center'}} variant='h4' >Company-Mail : haat@gmail.com</Typography>
          </Grid2>
          <Grid2 size={{xs:12}} >
            <Typography sx={{color:'rgb(31, 11, 75)',borderRadius:'50px' ,background:green[500],textAlign:'center'}} variant='h4' >Personal-Mail : Sanjeev@gmail.com</Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Contact