import { Grid2, Typography } from '@mui/material'
import React from 'react'
import './DashboardInfoBox.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DashboardInfoBox = (props) => {
    return (
        <Grid2 className='dashboardInfoBox ' padding={3} size={{ xs: 12, md: 12 }} sx={{color:'white', background: ` linear-gradient(to right, ${props.color[0]} , ${props.color[1]})` }} >
            { props.num%2==0 ? <TrendingDownIcon sx={{color:`${props.color[0]}`}} className='chart' />:<TrendingUpIcon sx={{color:`${props.color[0]}`}} className='chart' /> }
            <div style={{width:'100%',height:'100%', display: 'flex' ,flexDirection:'column',justifyContent:'space-between'}} >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div >
                        <h3 >{props.title}</h3>
                        <h1>{props.total}</h1>
                    </div>
                    <div className='icon' style={{background:`${props.color[0]}`}} >
                        <AccountCircleIcon />
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <div style={{display:'flex'}} >
                        <ul style={{marginLeft:'10px',background:'rgb(53, 53, 56)' ,borderRadius:'2px',padding:'2px',opacity:.7}}>
                            <li  >95%</li>
                        </ul>
                        <p>Last Month</p>
                    </div>
                    <MoreVertIcon/>
                </div>
            </div>
        </Grid2>
    )
}

export default DashboardInfoBox