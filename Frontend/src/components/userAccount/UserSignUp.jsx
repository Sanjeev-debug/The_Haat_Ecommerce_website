import React from 'react'
import { Avatar, Box, Button, Container, Grid2, Paper, Stack, TextField, Typography }from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { green, pink } from '@mui/material/colors';
import './UserSignUp.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { useContextProvider } from '../../contextProvider/ContextProvider';


const UserSignUp = () => {

  const {handleUserSignUp}=useContextProvider()

    const Navigate= useNavigate()

    const validationSchema=Yup.object().shape({
        name:Yup.string().required().min(2).max(20),
        email:Yup.string().required().email(),
        mobile:Yup.number().required(),
        password:Yup.string().required().min(6).max(20) 
    })

   const {handleChange,handleSubmit,values,errors,touched,handleBlur}=useFormik({
                initialValues:{
                    name:'',
                    email:'',
                    mobile:'',
                    password:''
                },
                validationSchema,
                onSubmit:(values,{resetForm})=>{
                       
                        resetForm();
                        handleUserSignUp(values);

                        Navigate('/userSignIn')
                }
   })




  return (
    <>
           <div  className='signUpMain'>
           <div style={{width:'100%',position:'absolute',top:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
     <Container maxWidth='sm'  >
    <Box component={Paper} sx={{mt:5,mb:10,background:' linear-gradient(to right,rgb(66, 192, 87) ,rgb(28, 134, 56),rgb(21, 125, 49))'}} elevation={12} >
        <Stack sx={{display:'flex',alignItems:'center',pt:2}}  >
            <Avatar sx={{background:green[500]}} >
            <LockIcon/>
            </Avatar>
            <Typography sx={{color:'rgb(113, 242, 124)'}} variant='h5' >Registration</Typography>
        </Stack>
        <form onSubmit={handleSubmit} >
          <Grid2 container spacing={2} sx={{p:5}} >
            <Grid2 size={{xs:12}}  >
            <TextField fullWidth label='Name'  onBlur={handleBlur} error={ touched.name && errors.name} helperText={touched.name && errors.name} variant='outlined' size='small' name='name' value={values.name} onChange={handleChange} />
            </Grid2>
            <Grid2 size={{xs:12}}  >
            <TextField fullWidth label='Email' onBlur={handleBlur} error={  touched.email && errors.email} helperText={touched.email && errors.email}  variant='outlined' size='small' name='email' value={values.email} onChange={handleChange} />
            </Grid2>
            <Grid2 size={{xs:12}}  >
            <TextField fullWidth label='Mobile' onBlur={handleBlur} error={ touched.mobile && errors.mobile  } helperText={ touched.mobile && errors.name }   variant='outlined' size='small' name='mobile' value={values.mobile} onChange={handleChange} />
            </Grid2>
            <Grid2 size={{xs:12}}  >
            <TextField fullWidth label='Password'  onBlur={handleBlur} error= {touched.password && errors.password } helperText={ touched.password && errors.password  }   variant='outlined' size='small' name='password' value={values.password} onChange={handleChange} />
            </Grid2>
            <Grid2 size={{xs:12}} >
                <Button sx={{background:green[500],color:'rgb(169, 237, 175)'}} fullWidth variant='outlined' type='submit' >Register</Button>
            </Grid2>
            <Grid2 size={{xs:12}}>
               <Button sx={{color:'rgb(113, 242, 124)',textTransform:'capitalize'}}  onClick={()=>Navigate('/userSignIn')} >Sign-In</Button>
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

export default UserSignUp