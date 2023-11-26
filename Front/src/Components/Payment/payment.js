import React, { useEffect, useState } from 'react'
import "./payment.css"
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../Redux/Actions/ActionUser'
import { useNavigate } from 'react-router-dom'

function Payment() {
   const user=useSelector(state=>state.userReducer.currentuser)
 console.log(user)
  const [update, setupdate] = useState()

useEffect(() => {
 setupdate(user)
}, [])

const navigate=useNavigate()
const dispatch=useDispatch()

const handlesubmit=(e)=>{

  const data = new FormData();
   data.append("name",update.name)
   data.append("email", update.email)
   data.append("command", true)
   dispatch(editUser(user._id,data, navigate))

}


  return (
    <div className='payme'>
<div>
  <div className="payment-container">
    <h2>Select a Payment Method</h2>
    <div className="payment-method">
      <label htmlFor="credit-card">
        <input type="radio" id="credit-card" name="payment" defaultValue="credit-card" />
        <img src="https://static-00.iconduck.com/assets.00/credit-card-illustration-2048x1491-jxrr6n08.png" alt="Credit Card" />
        Credit Card
      </label>
    </div>
    <div className="payment-method">
      <label htmlFor="paypal">
        <input type="radio" id="paypal" name="payment" defaultValue="paypal" />
        <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" alt="PayPal" />
        PayPal
      </label>
    </div>
<div className="payment-method">
  <label htmlFor="cash-on-delivery">
    <input type="radio" id="cash-on-delivery" name="payment" defaultValue="cash-on-delivery" />
    <button  onClick={handlesubmit}   className="payment-button">I will pay at home when the delivery man comes</button>
  </label>
</div>


  </div>
</div>


    </div>
  )
}

export default Payment