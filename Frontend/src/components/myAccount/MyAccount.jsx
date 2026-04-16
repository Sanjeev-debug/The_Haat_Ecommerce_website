import { Box, Button, Grid2, Paper, Typography } from '@mui/material'
import { common, green } from '@mui/material/colors'
import React, { Component } from 'react'
import { useContextProvider } from '../../contextProvider/ContextProvider'

const MyAccount = () => {
    const { user } = useContextProvider();
    return (
        <>
            <Box padding={2} >

                <Grid2 container  >
                    <Grid2 size={{ xs: 12 }} >
                        <Typography component={Paper} sx={{ padding: 2 }} variant='h5' > My Account</Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}  >
                        <Box component={Paper} elevation={6} sx={{ m: 2, display: 'flex',alignItems:'center' ,justifyContent:'space-between'}}>
                            <Box padding={2}>
                                <Box component={Paper} elevation={3} sx={{ width: '200px', height: '200px', borderRadius: '50%' }}></Box>
                            </Box >
                            <Box padding={2} >
                                <Typography variant='h3'>{user.name}</Typography>
                                <Typography variant='h4'>{user.email}</Typography>
                                <Typography variant='h5'>{user.mobile}</Typography>
                            </Box>
                            <Box padding={2}>
                            <Button padding={2} variant='contained' sx={{textTransform:'capitalize',color:'rgb(255, 255, 255)',background:green[500  ]}} >Change Password </Button>

                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>


            </Box>

        </>
    )
}

export default MyAccount