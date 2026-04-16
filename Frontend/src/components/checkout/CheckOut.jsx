import React, { useEffect } from 'react';
import './CheckOut.css';
import { Box, Button, Grid, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import { useContextProvider } from '../../contextProvider/ContextProvider';

const CheckOut = () => {
  const { addCartData, total, orderDetails, setOrderDetails ,user,orderRefress,setOrderRefress,razorpayKey} = useContextProvider();




  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required(),
    country: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    pincode: Yup.string().required().min(6).max(6),
    mobile: Yup.string().length(10, "only 10 digit ").required(),
    email: Yup.string().required().email(),


  })

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      customerName: '',
      country: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      mobile: '',
      email: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setOrderDetails(values)
      // console.log(values)
       


      resetForm();

    }

  });
  useEffect(() => {
    if (orderDetails && orderDetails.customerName) {
      handlePayment();
    }
  }, [orderDetails]);


  const handlePayment = async () => {
   

    const createOrder = await axios.post('http://localhost:5000/createOrder',{
      amount:total,
      currency:'INR',
     
    },
       {
      headers: {
        'Content-Type': 'application/json',
      }});
      // console.log(createOrder)


    const options = {
      key: razorpayKey, // Razorpay key_id
      amount: total,
      currency: "INR",
      name: "My Shop",
      description: "Test Transaction",
      order_id: createOrder.data.id,
      handler: async function (response) {
        
        const res = await axios.post("http://localhost:5000/verify", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        alert("Payment " + res.data.status);
        const orderData =  {
          name: orderDetails.customerName,
          mobile: orderDetails.mobile,
          address: orderDetails.address+',' + orderDetails.city+',' + orderDetails.state + ',' + orderDetails.country,
          pincode: orderDetails.pincode,
          amount:total,
          paymentId:response.razorpay_payment_id,
          email:user.email,
          userId:user._id,
          cartProducts:  addCartData.map((item)=>(
              {
                productId:item.productId._id,
                productName:item.productId.title,
                quantity:item.quantity,
                productPrice:item.productId.disCountPrice,
                image:item.productId.files[0],
                subTotal:(item.quantity * item.productId.disCountPrice),

              }
            ))
           }
       
        // console.log(orderData)
        
        

        



        const orderDetailResponse = await axios.post("http://localhost:5000/orderDetails",orderData,{
          headers: {
            'Content-Type': 'application/json'
          }});
          setOrderRefress(orderDetailResponse.data)
           

      },
      theme: {
        color: "#33bbaa",
      },
    };

    const rzp = new window.Razorpay(options);
    console.log("Opening Razorpay...");
    rzp.open();
  };
  // console.log(orderDetails)
  return (
    <>
      <Box p={2} >
        <Grid2 container spacing={3} >
          <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <div style={{ background: 'rgb(11, 237, 139)', padding: '20px', borderRadius: '10px', width: '100%' }}>
              <h2 style={{ fontSize: '20px' }} >Billing Details</h2>
            </div>

          </Grid2>
        </Grid2>
        <form className='productUploadForm' onSubmit={handleSubmit}  >
          <Grid2 container spacing={3} >
            <Grid2 size={{ xs: 12, md: 8 }}  >

              <Grid2 container spacing={2} mt={4} >
                <Grid2 size={{ xs: 12, md: 12 }} component={Paper} elevation={6} p={2} >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }} >
                    <h4 style={{ color: 'rgb(16, 15, 82)' }} >Customer Details</h4>
                    <MoreHorizIcon />
                  </div>
                  <Grid2 container spacing={2} >
                    <Grid2 size={{ xs: 12, md: 6 }} >

                      <TextField onBlur={handleBlur} error={touched.customerName && errors.customerName} helperText={touched.customerName && errors.customerName} color='success' size='small' label='Full Name*' name='customerName' value={values.customerName} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>


                    <Grid2 size={{ xs: 12, md: 6 }} >

                      <TextField onBlur={handleBlur} error={touched.country && errors.country} helperText={touched.country && errors.country} color='success' size='small' label='Country*' name='country' value={values.country} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>
                    <p>Street Address*</p>
                    <Grid2 size={{ xs: 12, md: 12 }} >

                      <TextField onBlur={handleBlur} error={touched.address && errors.address} helperText={touched.address && errors.address} color='success' size='small' label='Shipping Parmanent Address*' name='address' value={values.address} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }} >

                      <TextField onBlur={handleBlur} error={touched.state && errors.state} helperText={touched.state && errors.state} color='success' size='small' label='State*' name='state' value={values.state} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }} >

                      <TextField onBlur={handleBlur} error={touched.city && errors.city} helperText={touched.city && errors.city} color='success' size='small' label='City*' name='city' value={values.city} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>



                    <Grid2 size={{ xs: 12, md: 12 }} >

                      <TextField onBlur={handleBlur} error={touched.pincode && errors.pincode} helperText={touched.pincode && errors.pincode} color='success' size='small' label='pincode*' name='pincode' value={values.pincode} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} >

                      <TextField onBlur={handleBlur} error={touched.mobile && errors.mobile} helperText={touched.mobile && errors.mobile} color='success' size='small' label='Mobile*' name='mobile' value={values.mobile} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>


                    <Grid2 size={{ xs: 12, md: 6 }} >

                      <TextField onBlur={handleBlur} error={touched.email && errors.email} helperText={touched.email && errors.email} color='success' size='small' label='Email*' name='email' value={values.email} type="text" sx={{ width: '100%' }} onChange={handleChange} />
                    </Grid2>




                  </Grid2>

                </Grid2>


              </Grid2>


            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }} sx={{ padding: 2 }} component={Paper} elevation={6} mt={4} >
              <h2>Your Order</h2>

              <TableContainer component={Paper} sx={{ mt: 3 }} >
                <Table size="large" aria-label="a dense table">
                  <TableHead>
                    <TableRow   >

                      <TableCell align="left"><b>Products</b></TableCell>
                      <TableCell align="right"><b>SubTotal</b></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {
                      addCartData.length > 0 &&
                      addCartData.map((item, index) => (

                        <TableRow key={index} >


                          <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '50px', height: '50px', objectFit: '100%' }} src={item.productId.files[0]} alt="" />
                            <p>{(item.productId.description).slice(0, 17) + '..'}</p><p> * {item.quantity}</p>
                          </TableCell>
                          <TableCell align="right">&#8377; &nbsp;{item.quantity * item.productId.disCountPrice}</TableCell>

                        </TableRow>

                      ))
                    }


                    <TableRow >


                      <TableCell align="left"><b>Total</b></TableCell>
                      <TableCell align="right"><b>{total}</b></TableCell>

                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
              <Button type='submit' className='checkOutButton' > CheckOut  </Button>
            </Grid2>
          </Grid2>
        </form>

      </Box>

    </>
  )
}

export default CheckOut