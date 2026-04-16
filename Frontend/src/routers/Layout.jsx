import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout