import {  ADD_USER_SUCCESS, DELETE_ONEUSER_FAIL, DELETE_ONEUSER_SUCCESS, EDIT_USER, EDIT_USER_FAIL, GET_ALLUSER_FAIL, GET_ALLUSER_SUCCESS, GET_CURRENT_FAIL, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL } from "../Const/ConstUser"
import axios from "axios"

export const addUser = (Body,navigate) => async (dispatch) => {
    try {
      const resUser= await axios.post('http://localhost:5000/api/user/register', Body )
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: resUser.data,
     })
    navigate('/home')
      }
    catch (err) {
      console.log(err)
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors
      });

     }}

     export const login = (body, navigate) => async (dispatch) => {
      try {
          const res = await axios.post("http://localhost:5000/api/user/login", body)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data })
         switch (res.data.user.role){
           
       
            default:
                 return navigate("/profile") }
    } 
       catch (err) {
          console.log(err);
          dispatch({ 
             type: LOGIN_FAIL,
              payload: err.response.data })

      }}
      
export const getusers = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/user")
    dispatch({
      type: GET_ALLUSER_SUCCESS,
      payload: res.data
     
    });
   console.log(res.data);
  }

  catch (err) {
    console.log(err)
    dispatch({
      type: GET_ALLUSER_FAIL,
      payload: err.message
    });
  }}

  export const getCurrent = () => async (dispatch) => {
  
    const token=localStorage.getItem("token");
    try {
      const res= await axios.get("http://localhost:5000/api/user/current",{ headers:{Authorization:`Bearer ${token}`}})
    console.log(res.data);
      dispatch({type:GET_CURRENT_SUCCESS,
        payload:res.data})
}
catch(error){
dispatch({type:GET_CURRENT_FAIL,payload:error})

}

}

export const logout = () => {
  return { type: LOGOUT } 
}

export const editUser = (id, userBody, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
   
    const resUser = await axios.put(`http://localhost:5000/api/user/${id}`,userBody,{ headers: { Authorization: `Bearer ${token}` } })
     console.log(resUser);
    dispatch({
      type: EDIT_USER,
      payload:resUser.data
    })
     navigate('/profile')
  }
  catch (err) {
    console.log(err)
    dispatch({
      type: EDIT_USER_FAIL,
      payload:err.response.data
    });
    
  } }


  export const deleteUser = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
  try {
    await axios.delete(`http://localhost:5000/api/user/${id}`,{ headers: { Authorization: `Bearer ${token}` }})
    dispatch({
      type:DELETE_ONEUSER_SUCCESS,
    })
    dispatch(getusers())
  } catch (error) {
    console.log(error);
    dispatch({
      type:DELETE_ONEUSER_FAIL
    })
  }}

  