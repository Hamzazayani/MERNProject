import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../Carousel/heart-curve-live-thread.jpg'
import img1 from '../Carousel/desktop-wallpaper-health-background-29839-health-and-wellness.jpg'
import img2 from '../Carousel/What-can-I-do-to-look-after-my-heart.jpg'
import './carousel.css'


function Carousell() {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={1000}>
       <img  className='imgcarousel'  src={img} />
     
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img  className='imgcarousel'  src={img1} />
  
      </Carousel.Item>
      <Carousel.Item>
      <img  className='imgcarousel'  src={img2} />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousell