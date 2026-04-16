import { Button, Grid2, Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Cart.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import LogoutIcon from '@mui/icons-material/Logout';
import { useContextProvider } from '../../contextProvider/ContextProvider';
import { useNavigate } from 'react-router-dom';

import CartList from './CartList';


const Cart = () => {
  
  const Navigate = useNavigate()

  const { addCartData ,refressCart,subTotalList,setSubTotalList,setTotal,total} = useContextProvider();


  
  const handleTotal=async()=>{
  let  totalPrice= await addCartData.length>=1 && addCartData.reduce((total, item) => total + item?.productId?.disCountPrice * item?.quantity, 0);
  setSubTotalList(totalPrice)
    setTotal(subTotalList)
   
  }
handleTotal()

// console.log(subTotalList)

const handleCheckOut=()=>{
  if(addCartData.length>0){
    Navigate('/checkOut');
  }else{
    alert("Add product in Cart")

  }


}

  return (
    <>
      <Grid2 container spacing={10} padding={2} mt={5} >
        <Grid2 size={{ xs: 9 }}>
          <div className="cartMain">
            <h1>Your Cart</h1>
            <div className='cartClear' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>There are <span>{addCartData.length}</span> products in your cart</h2>
              <Button variant='contained' color='error' sx={{ textTransform: 'capitalize' }} ><DeleteOutlineIcon />Clear Cart</Button>
            </div>
            <TableContainer component={Paper} sx={{ mt: 2 }} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead  >
                  <TableRow className='tableHeadRow' >

                    <TableCell className='cartTableCell' align="center">S.No.</TableCell>
                    <TableCell className='cartTableCell' align="center">Product</TableCell>
                    <TableCell className='cartTableCell' align="center">Unit Price</TableCell>
                    <TableCell className='cartTableCell' align="center">Quantity</TableCell>
                    <TableCell className='cartTableCell' align="center">Subtotal</TableCell>
                    <TableCell className='cartTableCell' align="center">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    addCartData.length > 0 &&
                    addCartData.map((item, index) => (

                     <CartList item={item} key={index} index={index}  />

                    ))
                  }



                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid2>
        <Grid2 size={{ xs: 3 }}   >
          <div className='totalMain' >
            <div className="total">
              <div className='totalInfo' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>SubTotal</h3>
                <h3>Rs {subTotalList}</h3>
              </div>
              <hr />
              <div className='totalInfo' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Shipping</h3>
                <h3>Free</h3>
              </div>
              <hr />
              <div className='totalInfo' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Estimate for</h3>
                <h3>India</h3>
              </div>
              <hr />
              <div className='totalInfo' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Total</h3>
                <h3>Rs {total}</h3>
              </div>

              <Button onClick={ handleCheckOut} className='button' >Process To CheckOut <LogoutIcon /> </Button>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </>
  )
}

export default Cart