import React from 'react'
import "./home.css"
import Footer from '../Footer/footer'
import Carousell from '../Carousel/carousel'
import Navbar from '../Navbar/navbar'

function Homee() {
  return (
    <>
     <Navbar/>
    
   
    <div className='home'>
     
      <Carousell/>
      <Footer/>
      
    </div>
    </>
  )
}

export default Homee