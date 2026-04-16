import { Box, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import HomeIcon from '@mui/icons-material/Home';
import { useContextProvider } from '../../../contextProvider/ContextProvider';
import DialogBoxOrderProduct from '../../dialogBox/DialogBoxOrderProduct';


const DashBoardOrder = () => {

    const { allOrderData } = useContextProvider();
    const [open, setOpen] = useState(false);
     const [orderProductDetail,setOrderProductDetail]=useState([])


    const handleClickOpen = (order) => {
        setOrderProductDetail(order)
        setOpen(true);
    };
    // console.log(orderProductDetail)
    return (
        <>
            <Box>
                <Grid2 container spacing={3} >
                    <Grid2 component={Paper} elevation={6} padding={2} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <p style={{ fontSize: '20px' }} > Order List</p>
                        <div >
                            <Link className='productDetailToDashboardLink' to={'/dashboardHome'} ><HomeIcon /><p>Dashboard</p></Link>
                        </div>
                    </Grid2>

                </Grid2>
                <Grid2 container >
                    <Grid2 size={{ xs: 12 }} >
                        <TableContainer sx={{ mt: 3, maxHeight: 500, position: 'relative' }} >
                            <Table className='dashboardTable'  >
                                <TableHead sx={{ background: '#0be072', position: 'sticky', top: 0, zIndex: 100 }}  >
                                    <TableRow>
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
                                    {allOrderData.length > 0 &&
                                        allOrderData.map((order, index) => (
                                            <TableRow key={index} >
                                                <TableCell align="center" ><h3>{order.paymentId}</h3></TableCell>
                                                <TableCell align="center" ><span style={{ cursor: 'pointer' }} onClick={() => handleClickOpen(order)} >Click here to view</span></TableCell>
                                                <TableCell align="center" ><h3>{order.name}</h3></TableCell>
                                                <TableCell align="center" ><h3>{order.mobile}</h3></TableCell>
                                                <TableCell align="center" ><h3>{order.email}</h3></TableCell>
                                                <TableCell align="center" ><h3>{order.pincode}</h3></TableCell>
                                                <TableCell align="center" ><h3>&#8377; {order.amount}</h3></TableCell>
                                                <TableCell align="center" ><h3>{order.userId}</h3></TableCell>
                                                <TableCell align="center" ><h3>{(order.date).slice(0, 10)}</h3></TableCell>




                                            </TableRow>
                                        ))
                                    }


                                </TableBody>
                            </Table>
                        </TableContainer>
                        <DialogBoxOrderProduct open={open} setOpen={setOpen} orders={orderProductDetail} />

                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default DashBoardOrder