import React, { useEffect } from 'react'
import "./userlist.css"

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getusers } from '../../Redux/Actions/ActionUser'

function Userlist() {
  const users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
  useEffect(() => {
  
    dispatch( getusers())


  }, [])

  const handleDelete = (id) => {
    
    dispatch(deleteUser(id));
  };


  return (
<div className="userlist-container">
<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Email Addresses</th>
        <th>phone Number</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {users.map((el)=>
      <tr key={el._id}> 
        <td>{el.name}</td>
        <td>{el.address}</td>
        <td>{el.email}</td>
        <td>{el.phone}</td>
       
        <td>
                  <button onClick={() => handleDelete(el._id)}>X</button>
                </td>
      </tr>
      
    )}
    </tbody>
  </table>
</div>


    </div>
  )
  
}

export default Userlist