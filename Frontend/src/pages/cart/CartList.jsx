import { Rating, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import { useContextProvider } from '../../contextProvider/ContextProvider';



const CartList = ({ item,index }) => {
    const {handleDeleteCart,user}=useContextProvider()
   
    const [counter, setCounter] = useState(1);
    
    
    
       
   



    return (
        <>
            <TableRow  >
                <TableCell className='cartTableCell' align="center">{index + 1}</TableCell>
                <TableCell >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <img className='cartListImg' src={item?.productId?.files?.[0]  || "/placeholder.png"} alt="Loading" />
                        <div >
                            <h3 style={{ color: '#181d37' }} >{item?.productId?.title  || "Unknown Product"}</h3>
                            <div style={{ display: 'flex' }}>
                                <Rating className='ratings' name="half-rating-read" defaultValue={item?.productId?.rating  || 0} precision={1} readOnly />
                                <span style={{ color: '#7f8282' }} >({item?.productId?.rating  || 0})</span>
                            </div>
                        </div>
                    </div>
                </TableCell>
                <TableCell align="center"><h2 className='unitPrice' >Rs {item?.productId?.disCountPrice  || 0}</h2></TableCell>
                <TableCell align="center">
                    <QuantityButton counter={counter} setCounter={setCounter} item={item} />
                </TableCell>
                <TableCell align="center"  ><h2 className='subTotal' >Rs {item?.quantity * item?.productId?.disCountPrice  || 0}</h2></TableCell>
                <TableCell align="center" onClick={()=>handleDeleteCart(user._id,item._id)} ><DeleteOutlineIcon className='delete'  /></TableCell>
            </TableRow>

        </>
    )
}

export default CartList