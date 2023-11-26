import { GET_ALLPRODUCTS_SUCCESS, GET_BY_CATEGORY,ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from "../Const/ConstProduct"



const initialstate={
    products:[],
    productsbycategory:[],
    oneproduct:{},
   error:{}

 }
 
 export const   productReducer =(state=initialstate,action)=>{
    switch(action.type){
     case GET_ALLPRODUCTS_SUCCESS :
        return {...state,products:action.payload}
     case GET_BY_CATEGORY :
        return {...state,productsbycategory:action.payload}
      case ADD_PRODUCT_SUCCESS :
       return {...state}
     case GET_PRODUCT_SUCCESS :
       return {...state,oneproduct:action.payload}
     case EDIT_PRODUCT_SUCCESS:
      return {...state}
      case DELETE_PRODUCT_SUCCESS:
      const updatedProducts = state.products.filter((product) => product._id !== action.payload);
      return {
        ...state,
        products: updatedProducts,
      };
        default:
            return state
        }}