import React from 'react'
import './QuantityButton.css'
import  {  useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useContextProvider } from '../../contextProvider/ContextProvider';



const QuantityButton = ({counter,setCounter,item}) => {
const {handleUpdateCartData,user}=useContextProvider();
    
    const handleIncrease=()=>{
        setCounter(counter + 1)
       
        handleUpdateCartData(user._id,item.productId._id,(counter+1))
    }

    const handleDecrease=()=>{
       if(counter>1){
        setCounter(counter - 1)
        
        handleUpdateCartData(user._id,item.productId._id,(counter - 1))
       }
    }
// console.log(item)

    return (
        <>
            <div className='counter'>
                <input type="text" value={item?.quantity || 0} readOnly />
                <div className='arrows' style={{ display: 'flex', flexDirection: 'column' }} >
                    
                    <KeyboardArrowUpIcon onClick={handleIncrease } />
                    
                    <KeyboardArrowDownIcon onClick={handleDecrease } />
                </div>

            </div>
        </>
    )
}

export default QuantityButton