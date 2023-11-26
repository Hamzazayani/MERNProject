import React from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from '../../Redux/Actions/ActionUser'
import Alert from '../Alert/Alert';


function Register() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState();
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");


  const navigate = useNavigate();
  const Disptach=useDispatch()

const err=useSelector(state=>state.userReducer.error)
console.log(err)

  const handleSubmit = (e) => {
    e.preventDefault()
    

    if(img) {
   
      const data = new FormData();
    
      data.append("password",password)
      data.append("email", email)
      data.append("name",name)
      data.append("phone",phone)
      data.append("address",address)
      data.append("file",img)
  
      Disptach(addUser(data, navigate))
    }
    else
 {
    alert("please add your photo")
  
  }
  
  
   
    
  }


  return (
    <div  className='register'  >
  <section className="h-100 gradient-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center   logo ">
                <div className="logo-text">HealthCare</div>
          <div className="logo-subtext">Online Pharmacy</div>
                </div>
                <form  onSubmit={handleSubmit}  >
                <div className="form-outline mb-4">
                    <input type="name" onChange={(e) => setname(e.target.value)} id="form2Example11" className="form-control" placeholder="name" />
                    
                  </div>
                  <p>Please put your address</p>
                  <div className="form-outline mb-4">
                    <input type="email"  onChange={(e) => setaddress(e.target.value)} id="form2Example11" className="form-control" placeholder=" address" />
                    
                  </div>
                  <div className="form-outline mb-4">
                  <p>Please put your email address</p>
                    <input type="address"  onChange={(e) => setemail(e.target.value)} id="form2Example11" className="form-control" placeholder="email address" />
                    
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password" onChange={(e) => setpassword(e.target.value)} id="form2Example22" className="form-control" placeholder="password" />
                   </div>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example22">phone Number</label>
                    <input type="number" onChange={(e) => setphone(e.target.value)} id="form2Example11" className="form-control" placeholder="Phone Number" />
                    
                  </div>
                   <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form2Example33">Upload Image</label>
    <input type="file" onChange={(e) => setimg(e.target.files[0])} id="form2Example33" className="form-control" />
  </div>
 {err ? <Alert/> : null }
                  <div className="text-center pt-1 mb-5 pb-1">
                  <Link to={"/profile"}  > <button onClick={handleSubmit} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button></Link>
                </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-44">We are more than just a Pharmacy</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register