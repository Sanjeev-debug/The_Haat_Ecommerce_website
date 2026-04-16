import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContextProvider } from '../../../../contextProvider/ContextProvider';

const DashboardSelectBox = (props) => {

   const { uploadData, categoryData,dashboardProductDetails,showEditText} = useContextProvider()
  
  return (
    <>
     <FormControl className='select' color='success' sx={{  width:'100%'}} size="medium">
      <InputLabel id="demo-select-small-label">Select</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        name={props.name}
        value={showEditText?dashboardProductDetails[props.name]: props.name === "categoryBackgroundColor" ? categoryData[props.name] : uploadData[props.name]}
        label="Select"
        onChange={(e)=>props.handleChange(e)}
      >
        <MenuItem value="None">
          <em>Select</em>
        </MenuItem>
        {
            props.data.map((item,index)=>(
                <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
            ))
        }
       
      </Select>
    </FormControl>
    </>
  )
}

export default DashboardSelectBox