import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getusers } from '../../Redux/Actions/ActionUser'

function Livreur() {
    const users=useSelector(state=>state.userReducer.users)
    const userList=users.filter(el=>el.command==true)
    const dispatch=useDispatch()
   
    useEffect(() => {
    
      dispatch( getusers())
  
  
    }, [])
  

  
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
      {userList.map((el)=>
        <tr key={el._id}> 
          <td>John Doe {el.name}</td>
          <td>123 Main St, City{el.address}</td>
          <td>john@example.com {el.email}</td>
          <td>55229907 {el.phone}</td>
         
     
        </tr>
        
      )}
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default Livreur