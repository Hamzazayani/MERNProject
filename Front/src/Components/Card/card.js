import React from 'react'
import "./card.css"
import img from '../Card/DSC_0643-scaled.jpg'
import img1 from '../Card/medicine-pictures-2000-x-1333-ghyrlley8efpngk3.jpg'
import img2 from '../Card/depositphotos_73011163-stock-photo-various-medical-equipment-isolated-on.jpg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getbyCategory } from '../../Redux/Actions/ActionProduct'




function Card() {

  const dispatch=useDispatch()

  const card1="HealthCare"
  const card2="Beautycare"
  const card3="MedicalMaterial"
  
  return (
    <div  className='cardList' >

<div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img1} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Health Care</h2>
      <p className="custom-card-description">"Elevate your well-being with our premium health care products, crafted to nurture and empower a healthier, happier you.".</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
    <Link  to={"/product/HealthCare"} >  <button  onClick={()=>dispatch(getbyCategory(card1))}  className="custom-button">➔</button></Link>
    </div>
  </div>

  <div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Beauty Care</h2>
      <p className="custom-card-description">
"Unleash your radiance with our exquisite products, where indulgence meets transformation for a confident you.".</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
      <Link  to={"/product/Beautycare"} >  <button  onClick={()=>dispatch(getbyCategory(card2))}  className="custom-button">➔</button></Link>
    </div>
  </div>

  <div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img2} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Medical Material</h2>
      <p className="custom-card-description">
"Ensure precision and safety with our medical material products, dedicated to supporting the highest standards in healthcare.".</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
      <Link  to={"/product/MedicalMaterial"} >  <button  onClick={()=>dispatch(getbyCategory(card3))}  className="custom-button">➔</button></Link>
    </div>
  </div>
</div>


    
  )
}

export default Card