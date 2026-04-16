import React from 'react'
import './ImageUpload.css'

import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import { useContextProvider } from '../../contextProvider/ContextProvider';

const ImageUpload = (props) => {

  const { setImage } = useContextProvider()
  return (
    <>
    <div className='imageUploadMain'>
        <PermMediaOutlinedIcon  />
        <p>Image Upload</p>
        <input  type="file" name={props.name} multiple={props.multiple!==undefined?props.multiple:false}  style={{width:'100%',height:'100%',position:'absolute',opacity:0}} onChange={(event)=>props.setFileUpload(event.target.files)} />
       
    </div>
    
    </>
  )
}

export default ImageUpload