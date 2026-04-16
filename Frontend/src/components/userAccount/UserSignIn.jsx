import React, { useState } from 'react'
import { Avatar, Box, Button, Container, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import './UserSignIn.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { green } from '@mui/material/colors';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContextProvider } from '../../contextProvider/ContextProvider';
const UserSignIn = () => {

    const { handleUserSignIn, user, setUserSignInData } = useContextProvider()
    const Navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(2).max(20),
        password: Yup.string().required().min(6).max(20),

    })


    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            password: '',

        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            
            const userFind = await handleUserSignIn(values)
            //    console.log(userFind)
            if (userFind !== undefined && userFind.password == values.password) {

                Navigate('/')
                // console.log('match')
                resetForm();
            }
            else {
                alert('Wrong User Name or Password')
            }




        }
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword);

    }


    return (
        <>
         <div  className='signInMain'>
         <div style={{width:'100%',position:'absolute',top:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Container maxWidth='sm' >
                <Box component={Paper} sx={{ mt: 10, mb: 20, background: ' linear-gradient(to right,rgb(66, 192, 87) ,rgb(28, 134, 56),rgb(22, 113, 46))' }} elevation={12} >
                    <Stack sx={{ display: 'flex', alignItems: 'center', pt: 2 }}  >
                        <Avatar sx={{ background: green[500] }} >
                            <LockIcon />
                        </Avatar>
                        <Typography sx={{color:'rgb(113, 242, 124)'}} variant='h5' >Login</Typography>
                    </Stack>
                    <form onSubmit={handleSubmit} >
                        <Grid2 container spacing={2} sx={{ p: 5 }} >
                            <Grid2 size={{ xs: 12 }}  >
                                <TextField fullWidth label='Name' onBlur={handleBlur} error={touched.name && errors.name} helperText={touched.name && errors.name} variant='outlined' size='small' name='name' value={values.name} onChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} sx={{ position: 'relative' }} >
                                <TextField onBlur={handleBlur} error={touched.password && errors.password} helperText={touched.password && errors.password} fullWidth type={showPassword ? 'text' : 'password'} label='PassWord' variant='outlined' size='small' name='password' onChange={handleChange} value={values.password} />
                                <span style={{ position: 'absolute', top: '10px', right: '5px', color: 'rgb(60, 217, 55)' }} onClick={handleShowPassword} >{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                            </Grid2>


                            <Grid2 size={{ xs: 12 }} >
                                <Button sx={{ background: green[500], color: 'white' }} fullWidth variant='outlined' type='submit' >Login</Button>
                            </Grid2>
                            <Grid2 size={{ xs: 6 }} >
                                <Button sx={{ textTransform: 'capitalize', color: 'rgb(113, 242, 124)' }} onClick={() => Navigate('/userSignUp')} >Registration</Button>
                            </Grid2>
                            <Grid2 sx={{ textAlign: 'right' }} size={{ xs: 6 }} >
                                <Button sx={{ textTransform: 'capitalize', color: 'rgb(113, 242, 124)' }}>Forget Password</Button>
                            </Grid2>

                        </Grid2>
                    </form>

                </Box>

            </Container>
            </div>
            </div>

        </>
    )
}

export default UserSignIn