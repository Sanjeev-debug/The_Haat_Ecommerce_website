import { Box, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContextProvider } from '../../contextProvider/ContextProvider'
import DialogBoxOrderProduct from '../dialogBox/DialogBoxOrderProduct';

const OrderDetails = () => {

    const {allOrderData,user}=useContextProvider();
     const [open, setOpen] = useState(false);
     const [orderByUserId,setOrderByUserId]=useState([])
    
    
    

        const handleClickOpen = (order) => {
         setOrderByUserId(order);
            setOpen(true);
        };


  return (
    <Box component={Paper} elevation={6} padding={2} sx={{ mt: '50px' }} >
        <Grid2 container spacing={2} >
          <Grid2 sx={{ display: 'flex', justifyContent: 'space-between' }} size={{ xs: 12 }} >
            <Typography variant='h4'>Order Details</Typography>
           
          </Grid2>
          


        </Grid2>
        <Grid2 container >
          <Grid2 size={{ xs: 12 }} >
            <TableContainer sx={{ mt: 3, maxHeight: 500, position: 'relative' }} >
              <Table className='dashboardTable'  >
                <TableHead sx={{ background: '#0be072', position: 'sticky', top: 0, zIndex: 100 }}  >
                  <TableRow>
                  <TableCell align="center" >Status</TableCell>
                    <TableCell align="center" >Payment Id</TableCell>
                    <TableCell align="center" >Products</TableCell>
                    <TableCell align="center" >Name</TableCell>
                    <TableCell align="center" >Mobile</TableCell>
                    <TableCell align="center" >Email</TableCell>
                    <TableCell align="center" >Pincode</TableCell>
                    <TableCell align="center" >Total Amount</TableCell>
                    <TableCell align="center" >User Id</TableCell>
                    <TableCell align="center" >Date</TableCell>

                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrderData.length>0 && 
                    allOrderData.map((order, index) => (
                      user!='' &&  order.userId===user._id &&    
                      <TableRow key={index} >
                        <TableCell align="center" ><h3>{order.Status}</h3></TableCell>
                        <TableCell align="center" ><h3>{order.paymentId}</h3></TableCell>
                        <TableCell align="center" ><span style={{cursor:'pointer'}} onClick={() => handleClickOpen(order)}>Click here to view</span></TableCell>
                        <TableCell align="center" ><h3>{order.name}</h3></TableCell>
                        <TableCell align="center" ><h3>{order.mobile}</h3></TableCell>
                        <TableCell align="center" ><h3>{order.email}</h3></TableCell>
                        <TableCell align="center" ><h3>{order.pincode}</h3></TableCell>
                        <TableCell align="center" ><h3>&#8377; {order.amount}</h3></TableCell>
                        <TableCell align="center" ><h3>{order.userId}</h3></TableCell>
                        <TableCell align="center" ><h3>{(order.date).slice(0,10)}</h3></TableCell>
                       


                       
                       
                      </TableRow>
                    )
                  )

                  }


                </TableBody>
              </Table>
            </TableContainer>
            <DialogBoxOrderProduct open={open} setOpen={setOpen} orders={orderByUserId} />
            
          </Grid2>
        </Grid2>
      </Box>
  )
}

export default OrderDetails