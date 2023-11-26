import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserRoute({children}) {

    const token=localStorage.getItem("token")
const navigate=useNavigate()

  return (
    <div>
{token?children:navigate("/") }
    </div>
  )
}

export default UserRoute