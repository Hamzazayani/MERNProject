import React, { useEffect } from 'react'
import "./profile.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent, logout } from '../../Redux/Actions/ActionUser';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';




function Profile() {
  const user=useSelector(state=>state.userReducer.currentuser)
console.log(user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(getCurrent())
  }, [])
  


  return (
<>
<Navbar/>

    <div  className='profil' >
<div className="custom-bodyyy">

  <div className="profile">
    <div className="profile-header">
      <img className="profile-image" src={user.img} alt="Profile Image" />
      <h1 className="profile-name">{user.name}</h1>
      <p className="profile-email">{user.email}</p>
      <p className="profile-email"> Phone number: {user.phonenumber}</p>
      
    </div>
    <div className="profile-bio">
      
    </div>
    <p className="profile-home">Home Address: 123 Main St, Anytown</p>
    <div className="profile-edit">
    <Link to={"/editprofile"} > <button className="edit-button">Edit Profile</button> </Link>
    </div>
    <div id='logout' className="profile-edit">
      <button onClick={() => dispatch(logout(),navigate("/"))} id='logout' className="edit-button">Log Out</button>
    </div>
    
  </div>

</div>



    </div>
    </>
  )
}

export default Profile