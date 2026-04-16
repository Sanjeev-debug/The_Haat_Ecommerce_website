import React from 'react'
import PageNot from '../../image/pageNotFound/1.png'
import './PageNotFound.css'
import { Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const Navigate=useNavigate()
    return (
        <>
            <div className='pageNotFoundMain'>
                <div className='pageNotFound' style={{ backgroundImage: `url(${PageNot})`, width: '50%', height: '200px', }} ></div>
                <h1>Page Not Found</h1>
                <p>The link you clicked may be broken or the page may have been removed. </p>
                <p>Visit the Homepage or Contact us about the problem </p>
                <Button className='button ' onClick={()=>Navigate('/')} ><HomeIcon/>Back to Home Page</Button>
            </div>


        </>
    )
}

export default PageNotFound