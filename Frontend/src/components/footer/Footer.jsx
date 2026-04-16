import { Avatar, Box, Grid2, Icon, IconButton, Paper, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
import Logo from '../../image/The.png'
import './Footer.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <>
            <Box sx={{ mt: 5 }} >
                <Grid2 container sx={{ display: 'flex', justifyContent: 'space-evenly', padding: 2 }} >
                    <Grid2 size={{ xs: 12, md: 3 }} >
                        <img style={{ width: '50%', height: 100 ,objectFit:'cover'}} src={Logo} alt="" />
                        <h2 style={{ color: '#151f44' }} >Awesome  store website template</h2>
                        <ul >
                            <li style={{ listStyle: 'none' }} ><Link className='footerInfoLink' style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none', marginTop: '15px' }}  ><LocationOnOutlinedIcon /><p className='footerInfoKey' style={{ fontWeight: '700' }} >Address :</p><p>Sadar Market Agra,283112 UP India </p></Link></li>
                            <li style={{ listStyle: 'none' }} ><Link className='footerInfoLink' style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none', marginTop: '15px' }}  ><HeadsetMicOutlinedIcon /><p className='footerInfoKey' style={{ fontWeight: '700' }} >Call Us :</p><p>(+91) - 6397718685 </p></Link></li>
                            <li style={{ listStyle: 'none' }} ><Link className='footerInfoLink' style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none', marginTop: '15px' }}  ><EmailOutlinedIcon /><p className='footerInfoKey' style={{ fontWeight: '700' }} >Email :</p><p>ms.saisanjeev@gmail.com </p></Link></li>
                            <li style={{ listStyle: 'none' }} ><Link className='footerInfoLink' style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none', marginTop: '15px' }}  ><AccessTimeSharpIcon /><p className='footerInfoKey' style={{ fontWeight: '700' }} >Hours :</p><p>10:00 - 06:00, Mon - Sat </p></Link></li>
                        </ul>

                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 9 }} >
                        <div>
                            <Grid2 container spacing={5} >
                                <Grid2 size={{ xs: 12, ms: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }} >
                                    <h2 className='footerH2' >Compony</h2>
                                    <ul className='footerUl' >
                                        <li><Link className='Link'  >About Us</Link></li>
                                        <li><Link className='Link' >Delivery Information</Link></li>
                                        <li><Link className='Link' >Privacy Policy</Link></li>
                                        <li><Link className='Link' >Terms & Conditions</Link></li>
                                        <li><Link className='Link' >Contact Us</Link></li>
                                        <li><Link className='Link' >Support Center</Link></li>
                                        <li><Link className='Link' >Careers</Link></li>
                                    </ul>
                                </Grid2>
                                <Grid2 size={{ xs: 12, ms: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }} >
                                    <h2 className='footerH2' >Account</h2>
                                    <ul className='footerUl' >
                                        <li><Link className='Link'  >Sign In</Link></li>
                                        <li><Link className='Link' >View Cart</Link></li>
                                        <li><Link className='Link' >My Wishlist</Link></li>
                                        <li><Link className='Link' >Track My Order</Link></li>
                                        <li><Link className='Link' >Help Ticket</Link></li>
                                        <li><Link className='Link' >Shipping Details</Link></li>
                                        <li><Link className='Link' >Compare products</Link></li>
                                    </ul>
                                </Grid2>
                                <Grid2 size={{ xs: 12, ms: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }} >
                                    <h2 className='footerH2' >Corporate</h2>
                                    <ul className='footerUl' >


                                        <li><Link className='Link'>Become a Vendor</Link></li>
                                        <li><Link className='Link'>Affiliate Program</Link></li>
                                        <li><Link className='Link'>Farm Business</Link></li>
                                        <li><Link className='Link'>Farm Careers</Link></li>
                                        <li><Link className='Link'>Our Suppliers</Link></li>
                                        <li><Link className='Link'>Accessibility</Link></li>
                                        <li><Link className='Link'>Promotions</Link></li>

                                    </ul>
                                </Grid2>
                                <Grid2 size={{ xs: 12, ms: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }} >
                                    <h2 className='footerH2' >Popular</h2>
                                    <ul className='footerUl' >

                                        <li><Link className='Link' >Milk &amp; Flavoured Milk</Link></li>
                                        <li><Link className='Link' >Butter and Margarine</Link></li>
                                        <li><Link className='Link' >Eggs Substitutes</Link></li>
                                        <li><Link className='Link' >Marmalades</Link></li>
                                        <li><Link className='Link' >Sour Cream and Dips</Link></li>
                                        <li><Link className='Link' >Tea &amp; Kombucha</Link></li>
                                        <li><Link className='Link' >Cheese</Link></li>
                                    </ul>

                                </Grid2>


                            </Grid2>
                        </div>

                    </Grid2>
                </Grid2>
            </Box>
            <Box component={Paper} sx={{ borderBottom: "1px solid grey",m:2}}></Box>
            <Box>
                <Grid2 container spacing={2} padding={2} margin={'5px 0px'} sx={{display:'flex',justifyContent:'space-between'}} >
                    <Grid2 size={{ xs: 12, md: 3 }} sx={{ pr: 5, display: 'flex', alignItems: 'center' }}   >
                        <p className='footerCopyRightP' >© 2024, <span className='footerCopyRightSpan' >Haat</span> - HTML Ecommerce Template
                            All rights reserved</p>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                        <div className='footerCopyRightCalling' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                            <WifiCalling3OutlinedIcon />
                            <div>
                                <h2 style={{ color: '#0db368' }} >6391896785</h2>
                                <p className='footerCopyRightP' >Working 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div className='footerCopyRightCalling' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                            <WifiCalling3OutlinedIcon />
                            <div>
                                <h2 style={{ color: '#0db368' }} >9756561854</h2>
                                <p className='footerCopyRightP' >24/7 Support Center</p>
                            </div>
                        </div>


                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}   >
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',flexWrap:'wrap' }} >
                            <h3 className='footerH2' >Follow Us</h3>
                            <ul className='footerCopyRightUl' >
                                <li><Link className='Link' style={{ textDecoration: 'none' }} >
                                <Stack padding={'2px'} >
                                    <Avatar sx={{background:'#0db368'}} >
                                    <FacebookOutlinedIcon />
                                    </Avatar>
                                </Stack>
                                 </Link></li>
                                <li><Link className='Link' style={{ textDecoration: 'none' }} >
                                <Stack padding={'2px'} >
                                    <Avatar sx={{background:'#0db368'}} >
                                    <TwitterIcon />
                                    </Avatar>
                                </Stack>
                                 </Link></li>
                                <li><Link className='Link' style={{ textDecoration: 'none' }} >
                                <Stack padding={'2px'}  >
                                    <Avatar sx={{background:'#0db368'}} >
                                    <InstagramIcon />
                                    </Avatar>
                                </Stack>
                                 </Link></li>
                                <li><Link className='Link' style={{ textDecoration: 'none' }} >
                                <Stack padding={'2px'} >
                                    <Avatar sx={{background:'#0db368'}} >
                                    <PinterestIcon />
                                    </Avatar>
                                </Stack>
                                 </Link></li>
                                <li><Link className='Link' style={{ textDecoration: 'none' }} >
                                <Stack padding={'2px'} >
                                    <Avatar sx={{background:'#0db368'}} >
                                    <YouTubeIcon />
                                    </Avatar>
                                </Stack>
                                 </Link></li>

                            </ul>
                        </div>
                        <p className='footerCopyRightP' style={{marginTop:'-12px'}} >Up to 15% discount on your first subscribe</p>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Footer