import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

import AboutSeller from '../pages/AboutSeller'


import AdminPanel from '../pages/AdminPanel'



import Venders from '../pages/Venders'
import Shop from '../pages/Shop'
import Contact from '../pages/contact/Contact'
import Blog from '../pages/Blog'
import Home from '../pages/home/Home'
import Listing from '../pages/listing/Listing'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import Detail from '../pages/detail/Detail'
import Cart from '../pages/cart/Cart'
import Dashboard from '../components/dashboard/Dashboard'


import Layout from './Layout'
import DashboardHome from '../components/dashboard/home/DashboardHome'

import AdminLogin from '../pages/adminLogin/AdminLogin'
import DashboardProductDetails from '../components/dashboard/product/DashboardProductDetails'
import ProductList from '../components/dashboard/productlist/ProductList'
import ProductUpload from '../components/dashboard/productUpload/ProductUpload'
import About from '../pages/about/About'
import CategoryList from '../components/dashboard/category/CategoryList'
import CategoryUpload from '../components/dashboard/category/CategoryUpload'
import DashboardCategoryDetails from '../components/dashboard/category/DashboardCategoryDetails'
import UserSignIn from '../components/userAccount/userSignIn'
import UserSignUp from '../components/userAccount/UserSignUp'

import CheckOut from '../components/checkout/CheckOut'
import OrderDetails from '../components/orderDetail/OrderDetails'
import MyAccount from '../components/myAccount/MyAccount'
import DashBoardOrder from '../components/dashboard/dashboardOrder/DashBoardOrder'

const Routers = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>


          <Route path='/' element={<Layout />} >
           
           
            <Route path='/' element={<Home />} />
            <Route path='/listing' element={<Listing />} />
            <Route path='/product/detail' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/adminPanel' element={<AdminPanel />} />
            <Route path='/AboutSeller' element={<AboutSeller />} />
            <Route path='/userSignIn' element={<UserSignIn />} />
            <Route path='/userSignUp' element={<UserSignUp />} />
            <Route path='/CheckOut' element={ <CheckOut/>} />
            <Route path='/myOrder' element={ <OrderDetails/>} />
            
            
            <Route path='/myAccount' element={ <MyAccount/>} />
          </Route>
          <Route path='/' element={<Dashboard />} >
            
            
            <Route path='/dashboardHome' element={<DashboardHome />} />
            <Route path='/dashboardProductDetails' element={<DashboardProductDetails />} />
            <Route path='/dashboardProductList' element={<ProductList />} />
            <Route path='/dashboardProductUpload' element={<ProductUpload />} />
            <Route path='/dashboardCategoryList' element={<CategoryList />} />
            <Route path='/dashboardCategoryUpload' element={<CategoryUpload />} />
            <Route path='/dashboardOrder' element={<DashBoardOrder />} />
            <Route path='/dashboardCategoryDetails' element={<DashboardCategoryDetails />} />

          
          </Route>
          <Route path='/adminLogin' element={<AdminLogin/>} />
          <Route path='*' element={<PageNotFound />} />







        </Routes>



      </BrowserRouter>
    </>
  )
}

export default Routers