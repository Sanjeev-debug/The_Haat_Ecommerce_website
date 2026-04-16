import * as React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid2, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useContextProvider } from '../../contextProvider/ContextProvider';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));







const DialogBoxOrderProduct = ({ open, setOpen, orders}) => {
    

    const handleClose = () => {
        setOpen(false);
    };
    console.log(orders)
    return (
        <React.Fragment>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    View Products
                </DialogTitle>

                <DialogContent dividers>

                    <Grid2 container >
                        <Grid2 size={{ xs: 12 }} >
                            <TableContainer sx={{ mt: 3, maxHeight: 500, position: 'relative' }} >
                                <Table className='dashboardTable'  >
                                    <TableHead sx={{ background: '#0be072', position: 'sticky', top: 0, zIndex: 100 }}  >
                                        <TableRow>

                                            <TableCell align="center" >Product-Name</TableCell>
                                            <TableCell align="center" >Image</TableCell>
                                            <TableCell align="center" >Quantity</TableCell>
                                            <TableCell align="center" >Price</TableCell>
                                            <TableCell align="center" >SubTotal</TableCell>


                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            
                                          orders!="" &&  orders?.cartProducts?.length > 0 &&
                                                orders.cartProducts.map((product, index) => (
                                                    <TableRow key={index} >


                                                        <TableCell align="center" ><h3>{product.productName}</h3></TableCell>
                                                        <TableCell align="center" ><img style={{height:'100px'}} src={product.image} alt="Loading..." /></TableCell>
                                                        <TableCell align="center" ><h3>{product.quantity}</h3></TableCell>
                                                        <TableCell align="center" ><h3>&#8377; {product.productPrice}</h3></TableCell>
                                                        <TableCell align="center" ><h3>&#8377; {product.subTotal}</h3></TableCell>






                                                    </TableRow>
                                                ))
                                          
                                        }


                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </Grid2>
                    </Grid2>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    )
}

export default DialogBoxOrderProduct