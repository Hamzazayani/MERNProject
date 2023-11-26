import React from 'react'
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../Redux/Actions/ActionUser'
import { Link } from 'react-router-dom';





function Login() {

  const navigate = useNavigate();
  const disptach=useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const err=useSelector(state=>state.userReducer.error)
  const handleSubmit = (e) => {
    e.preventDefault()
      disptach(login({email,password}, navigate))
  
        };

  return (
    <div  className='log'  >
<section >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center    logo">
                <div className="logo-text">HealthCare</div>
          <div className="logo-subtext">Online Pharmacy</div>
                </div>
                <form>
                  <p>Please login to your account</p>
                  <div className="form-outline mb-4">
                    <input type="email"  onChange={(e) => setemail(e.target.value)} id="form2Example11" className="form-control" placeholder="Email address" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password"  onChange={(e) => setpassword(e.target.value)} id="form2Example22" className="form-control" placeholder="Password" />
                    
                  </div> 
                  <div className="text-center pt-1 mb-5 pb-1">
                  <Link to={"/profile"}   > <button onClick={handleSubmit} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                      in</button></Link>
                  </div>
              
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to={"/Register"}   ><button type="button" className="btn btn-outline-danger">Create new</button></Link>
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

export default Login