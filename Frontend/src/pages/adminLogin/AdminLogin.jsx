import { Avatar, Box, Button, Container, Grid, Grid2, hexToRgb, Paper, Stack, TextField, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from 'react'
import { green, pink } from '@mui/material/colors';
import { Height } from '@mui/icons-material';
import { useFormik }from 'formik'
import * as Yup from 'yup'
import { useNavigate} from 'react-router'
import Background from '../../image/background/1.jpg'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './AdminLogin.css'
import { useContextProvider } from '../../contextProvider/ContextProvider';

const AdminLogin = () => {
  const Navigate=useNavigate();
  const {setIsDashboardLogin}= useContextProvider()
  const [showPassword,setShowPassword]=useState(false);


  const validationSchema=Yup.object().shape({
    email:Yup.string().required().email(),
    password:Yup.string().required().min(6,"At least 6 Charater").max(20,'Maximun 20 charater')
  })

   const {handleChange,handleSubmit,values,errors,touched,handleBlur}=useFormik({
    initialValues:{
      email:'', 
      password:''
    },
    validationSchema,
    onSubmit: async(values,{resetForm})=>{
      
        // console.log(values)
        // if(values.email==='Sanjeev@gmail.com' && values.password==='Sanjeev@111'){

        //   setIsDashboardLogin(true)
        //   Navigate('/dashboardHome')
        //   resetForm();
        // }else{
        //   alert("Email or password is not valid")
        // }
       await setIsDashboardLogin(true)
        Navigate('/dashboardHome');
        resetForm();
    }

   });
   const handleShowPassword=()=>{
    setShowPassword(!showPassword);
   
   }


  

  return (
  <div       className='adminLoginMain'>
    <div style={{width:'100%',position:'absolute',top:0,height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
   <Container maxWidth={'sm'}  >
   <Box sx={{p:5,background:' linear-gradient(to right,rgb(66, 192, 87) ,rgb(28, 134, 56),rgb(7, 45, 17))'}}  >
   
      <Stack spacing={1}  sx={{display:'flex', alignItems:'center',pb:2}}>
        <Avatar sx={{background:'rgb(60, 217, 55)'}} >
            <LockIcon  />
        </Avatar>
        <Typography color='rgb(95, 229, 91)' >Admin-Login</Typography>
      </Stack>
      <form onSubmit={handleSubmit} >
      <Grid2  container spacing={2}  sx={{p:5}} >
        <Grid2 size={{xs:12}} >
          <TextField onBlur={handleBlur} error={ touched.email && errors.email} helperText={touched.email && errors.email} fullWidth label='Email' type='email' variant='outlined' size='small'name='email'  value={values.email} onChange={handleChange} />
        </Grid2>
        <Grid2 size={{xs:12}} sx={{position:'relative'}} >
          <TextField  onBlur={handleBlur} error={touched.password && errors.password} helperText={touched.password && errors.password} fullWidth type={showPassword?'text':'password'} label='PassWord' variant='outlined' size='small' name='password'  onChange={handleChange} value={values.password} />
          <span style={{position:'absolute',top:'10px',right:'5px',color:'rgb(60, 217, 55)'}} onClick={handleShowPassword} >{showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}</span>
        </Grid2>
        <Grid2 size={{xs:12}} >
         <Button type='submit' fullWidth variant='outlined'sx={{background:'rgb(60, 217, 55)',color:'white',border:'none'}} >Login</Button>
        </Grid2>
        <Grid2 size={{xs:12}} sx={{display:'flex',justifyContent:'space-between'}} >
          <Typography sx={{cursor:'pointer'}} color='rgb(60, 217, 55)' >Forget Password</Typography>
          <Typography sx={{cursor:'pointer'}} color='rgb(55, 221, 50)' >Create New Account/Sign-Up</Typography>
        </Grid2>
      </Grid2>
      </form>
    
   </Box>

   </Container>
  </div>
  </div>
  )
}

export default AdminLogin