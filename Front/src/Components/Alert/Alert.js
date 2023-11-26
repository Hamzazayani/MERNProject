import React from 'react'
import { useSelector } from 'react-redux'
import "./Alert.css"
function Alert() {
  const err = useSelector(state => state.userReducer.error)

  return(
    <p id='err_reg'>
   
{   err && err[0] ?   <span>{err[0].msg}</span>:null}
  </p>
  )
}
  


export default Alert