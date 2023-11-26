import { ADD_USER_SUCCESS, DELETE_ONEUSER_SUCCESS, EDIT_USER, EDIT_USER_FAIL, GET_ALLUSER_SUCCESS, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL } from "../Const/ConstUser"



const initialstate={
users:[],

currentuser:{},
error:[]

}



export const    userReducer =(state=initialstate,{type,payload})=>{



    switch (type) {
        case ADD_USER_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state,currentuser: payload.user  }
        case REGISTER_FAIL:
            return { ...state, error:payload }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state, currentuser: payload.user ,errors:{}}
        case LOGIN_FAIL:
            return {...state,error:payload}
        case GET_CURRENT_SUCCESS:
            return { ...state, currentuser: payload.User }
        case LOGOUT:
            localStorage.removeItem("token")
        case GET_ALLUSER_SUCCESS:
            return {...state,users:payload}
        case LOGOUT:
            localStorage.removeItem("token")
            return {...state} 
            case EDIT_USER:
            return { ...state}
        case EDIT_USER_FAIL:
            return  { ...state, errors: payload }  
            case DELETE_ONEUSER_SUCCESS:
              return {...state}
        default:
            return state
    }}
