import React, { useEffect, useState } from 'react'
import "./editprofile.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { editUser } from '../../Redux/Actions/ActionUser'

function Editprofile() {

  const dispatch = useDispatch()
  const [img, setimg] = useState()
  const user = useSelector(state => state.userReducer.currentUser)
  const [newInfo, setnewInfo] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    setnewInfo(user)
  }, [user])


  const handlesubmit=(e)=>{

  const data = new FormData();
     data.append("name",newInfo.name)
     data.append("email", newInfo.email)
     data.append("file",img) 
     dispatch(editUser(user,data, navigate))
   
  }


  return (
    <div>
     <div className="hiiii">
  <div className="custom-edit-user-form">
    <h2 className="custom-edit-user-heading">Edit User</h2>
    <form id="edit-user-form" encType="multipart/form-data">
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Name:</div>
        <input  onChange={(e)=>setnewInfo({...newInfo,name:e.target.value})}    type="text" className="custom-edit-input" id="user-name" name="user-name" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Email:</div>
        <input  onChange={(e)=>setnewInfo({...newInfo,email:e.target.value})} type="email" className="custom-edit-input" id="user-email" name="user-email" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">New Password:</div>
        <input  onChange={(e)=>setnewInfo({...newInfo,password:e.target.value})} type="password" className="custom-edit-input" id="new-password" name="new-password" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Image:</div>
        <input type="file" onChange={(e)=>setimg(e.target.files[0])}  className="custom-edit-input" id="user-image" name="user-image" accept="image/*" required />
      </div>
      <Link to={"/profile"} >  <button onClick={handlesubmit} className="custom-edit-button" type="submit">Save Changes</button></Link>
    </form>
  </div>
</div>


    </div>
  )
}

export default Editprofile