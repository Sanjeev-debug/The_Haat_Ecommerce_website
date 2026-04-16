import React, { useState } from 'react'
import './Detail.css'
import { Box, Button, Grid2, Paper, Rating } from '@mui/material'
import { Link, useNavigate } from 'react-router'
import SideBar from '../../components/sideBar/SideBar'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Banner from '../../image/banner/4.jpg'
import Slider from "react-slick";
import Shirt from '../../image/product/shirt.webp'
import Shirt1 from '../../image/product/shirt1.webp'
import Shirt2 from '../../image/product/shirt2.webp'
import Shirt3 from '../../image/product/shirt3.webp'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Sanjeev from '../../image/review/1.jpg'
import { useContextProvider } from '../../contextProvider/ContextProvider'


const Detail = () => {
  const { dashboardProductDetails ,setAddCartData,addCartData, handleAddToCartData,user} = useContextProvider();


  const Navigate = useNavigate()

  const [zoomImage, setZoomImage] = useState(dashboardProductDetails !== '' ? dashboardProductDetails.files[0] : 'h')
  const [active, setActive] = useState(1)
  const [active1, setActive1] = useState(0)
  const [counter, setCounter] = useState(1)



  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,



  };

  const changeImage = (url) => {
    setZoomImage(url)
  }


  const isActive = (index) => {
    setActive(index)
  }
  const isActive1 = (index) => {
    setActive1(index)
  }


  const plusCounter = () => {
    setCounter(counter + 1)
  }
  const minusCounter = () => {
    counter > 1 && setCounter(counter - 1)
  }

  
    const handleAddCart= async (item)=>{
      if(!user._id){
        Navigate('/userSignIn')
      }else{

        handleAddToCartData(user._id,item._id)
        Navigate('/cart') 
      }
     }

  return (
    <>
      <Box padding={2}  >

        <div className='detailMainTitle' >
          <h1>Product detail</h1>
        </div>

        <div className="detailData">
          <Grid2 container >
            <Grid2 size={{ xs: 12, md: 12 }}  >
              <Grid2 container sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <Grid2 size={{ xs: 12, md: 5 }} padding={2} >
                  <div className='innerZoom' >
                    <InnerImageZoom className='zoomImage' zoomScale={1} zoomType='hover' src={zoomImage} />
                  </div>
                  <Slider {...settings} className='detailSlider'  >
                  {dashboardProductDetails &&
                  dashboardProductDetails.files.map((item, index) => (

                    <div key={index} >
                      <img src={item} style={{width: '100px', height: '100px', borderRadius: '5px' }} alt="" onClick={() => setZoomImage(item)} />
                    </div>
                  ))
                }





                  </Slider>

                </Grid2>
                <Grid2 className='detailInfo' size={{ xs: 12, md: 5 }} sx={{ padding: '10px 50px' }}>
                  <div className='saleOff' >Sale Off</div>
                  <h1 className='title' >{dashboardProductDetails.title}</h1>
                  <Rating className='rating' name="half-rating-read" defaultValue={dashboardProductDetails.rating} precision={0.5} readOnly />
                  <span className='review' >(32 reviews)</span>
                  <div className='detailPrice' >
                    <h1>Rs.{dashboardProductDetails.disCountPrice}</h1>
                    <div>
                      <p>26% Off</p>
                      <h2><del>Rs.{dashboardProductDetails.regularPrice}</del></h2>
                    </div>
                  </div>
                  <p className='lorem' >{dashboardProductDetails.description}t</p>

                  <div className='detailWeight' >
                    <h3>Size/Weight :</h3>
                    <ul>
                      <li className={active == 0 ? 'active' : ''} onClick={() => isActive(0)} >50g</li>
                      <li className={active == 1 ? 'active' : ''} onClick={() => isActive(1)} >60g</li>
                      <li className={active == 2 ? 'active' : ''} onClick={() => isActive(2)} >80g</li>
                      <li className={active == 3 ? 'active' : ''} onClick={() => isActive(3)} >100g</li>
                      <li className={active == 4 ? 'active' : ''} onClick={() => isActive(4)} >150g</li>
                    </ul>
                  </div>
                  <div className="detailCart">
                    <div className='counter'>
                      <input type="text" value={counter} onChange={(e) => setCounter(e.target.value)} />
                      <div className='arrows' style={{ display: 'flex', flexDirection: 'column' }} >
                        <KeyboardArrowUpIcon onClick={() => plusCounter()} />
                        <KeyboardArrowDownIcon onClick={() => minusCounter()} />
                      </div>

                    </div>
                    <Button className='addCart ' onClick={() => handleAddCart(dashboardProductDetails)} ><AddShoppingCartIcon />Add to cart</Button>
                    <Button className='button like ' ><FavoriteBorderIcon /></Button>
                    <Button className='button  compare' ><CompareArrowsIcon /></Button>
                  </div>
                  <div className="mfg">
                    <div>
                      <p>Type:<span>Organic</span></p>
                      <p>MFG:<span>{dashboardProductDetails.publiced}</span></p>
                      <p>Life:<span>70 days</span></p>

                    </div>
                    <div>
                      <p>SKU:<span>FWM15VKT</span></p>
                      <p>Tags:<span>{dashboardProductDetails.brand}</span></p>
                      <p>Stock:<span>{dashboardProductDetails.productStock} Items In Stock</span></p>
                    </div>
                  </div>
                </Grid2>
              </Grid2>
            </Grid2>

          </Grid2>
        </div>
        <Grid2 size={{ xs: 12 }} sx={{mt:2}} >
          <div className='detailExtrainfo' >
            <div>
              <Link className='link' ><Button className={`button ${active1 == 0 ? 'active' : ''} `} onClick={() => isActive1(0)} >Description</Button></Link>
              <Link className='link' ><Button className={`button ${active1 == 1 ? 'active' : ''} `} onClick={() => isActive1(1)} >Additional info</Button></Link>

              <Link className='link' ><Button className={`button ${active1 == 2 ? 'active' : ''} `} onClick={() => isActive1(2)} >Review (3)</Button></Link>

            </div>
            {
              active1 == 0 &&
              <div className="detailDescription">
                <h2>Packaging & Delivery</h2>
                <hr />
                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                <h2>Suggested Use</h2>
                <p>Refrigeration not necessary.</p>
                <p>Stir before serving</p>
                <h2>Other Ingredients</h2>
                <p>Organic raw pecans, organic raw cashews.</p>
                <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
                <h2>Warnings</h2>
                <p>Oil separation occurs naturally. May contain pieces of shell.</p>
              </div>
            }
            {
              active1 == 1 &&
              <div className="additionalinfo">
                <table class="table">
                  <tbody  >



                    <tr class="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr class="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>

                    <tr class="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>

                    <tr class="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr class="pa_size">
                      <th>Size</th>
                      <td>
                        <p>X , XL , XXL</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            {
              active1 == 2 &&
              <div className="review">
                <Grid2 container spacing={3}  >
                  <Grid2 size={{ xs: 12, md: 12 }}>
                    <h2>Customer questions & answers</h2>
                    <div className='reviewInfo' >
                      <Grid2 container spacing={2} padding={2}>
                        <Grid2 size={{ xs: 2 }} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}  >

                          <img src={Sanjeev} alt="" style={{ width: '100px', height: '100px', objectFit: "cover", borderRadius: '50%', border: '1px solid', overflow: 'hidden' }} />
                          <h3 className='reviewName' >Sanjeev</h3>


                        </Grid2>
                        <Grid2 size={{ xs: 10 }}  >

                          <div className='reviewDate' style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <p>December 4, 2024 at 3:12 pm</p>
                            <Rating className='rating' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                          </div>
                          <p className='reviewLorem' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>


                        </Grid2>

                      </Grid2>

                    </div>
                    <div className="addReview">
                      <h2>Add a review</h2>
                      <Grid2 container spacing={2} >
                        <Grid2 size={{ xs: 12 }}>
                          <textarea placeholder='Write Comment' style={{ width: '100%', height: '100px', borderRadius: '5px', padding: '10px' }} ></textarea>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }} >
                          <input type="text" placeholder='Name' style={{ width: '100%', height: '50px', borderRadius: '5px', padding: '10px' }} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }} >
                          <input type="text" placeholder='Email' style={{ width: '100%', height: '50px', borderRadius: '5px', padding: '10px' }} />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }} >
                          <input type="text" placeholder='Website' style={{ width: '100%', height: '50px', borderRadius: '5px', padding: '10px' }} />
                        </Grid2>
                      </Grid2>
                      <Button variant='contained' color='success' sx={{ mt: 5 }} >Submit Review</Button>
                    </div>
                  </Grid2>

                </Grid2>
              </div>
            }

          </div>
        </Grid2>




      </Box>
    </>
  )
}

export default Detail