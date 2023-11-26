import axios from "axios"
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS, GET_BY_CATEGORY, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, ADD_TO_BASKET, DELETE_BASKET } from "../Const/ConstProduct";




export const getAllProducts = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/Product")
    dispatch({
      type: GET_ALLPRODUCTS_SUCCESS,
      payload: res.data
     
    });
   
  }

  catch (err) {
    console.log(err)
    dispatch({
      type: GET_ALLPRODUCTS_FAIL,
      payload: err.message
    });
  }}

export const getbyCategory =(Category)=>async(dispatch) =>{

    try {
    const res = await axios.get(`http://localhost:5000/api/Product/${Category}`)
       dispatch({
         type:GET_BY_CATEGORY,
         payload: res.data
        
       });
      console.log(res.data);
     }
     catch (err) {
      console.log(err)
      dispatch({
        type: GET_ALLPRODUCTS_FAIL,
        payload: err.message
      });
    }
} 

export const addproduct = (Body,navigate) => async (dispatch) => {
  try {
    const resProduct= await axios.post('http://localhost:5000/api/product',Body )
  console.log(resProduct)
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: resProduct.data,
   })
  navigate('/home')
    }
  catch (err) {
    console.log(err)
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: err.response.data
    });

   }}

   export const getoneproduct = (id) => async (dispatch) => {
 
    try {
   const res = await axios.get(`http://localhost:5000/api/product/oneproduct/${id}`)
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data
       
      });
     
    }
  
    catch (err) {
      console.log(err)
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: err.message
      });
    }} 





   export const editproduct = (id,Body,navigate) => async (dispatch) => {
    try {
      const resProduct= await axios.put(`http://localhost:5000/api/product${id}`,Body )
    console.log(resProduct)
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: resProduct.data,
     })
    navigate('/home')
      }
    catch (err) {
      console.log(err)
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload: err.response.data
      });
  
     }}

     export const deleteproduct = (productid) => async (dispatch) => {
      try {
        const res = await axios.delete(`http://localhost:5000/api/product/${productid}`);
    
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: productid,
        });
    
        dispatch(getAllProducts()); 
      } catch (error) {
        console.error('Error deleting product:', error);
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: error.message,
        });
        
      }
    };

    

export const addToBasket = (title,price) => ({
  type:ADD_TO_BASKET,
  payload: {title,price}
});

export const addProductToBasket = (Body) => async (dispatch) => {
  try {
    const resProduct = await axios.post('http://localhost:5000/api/product', Body);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: resProduct.data,
    });

    
    dispatch(addToBasket(resProduct.data));


  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: err.response.data,
    });
  }
};
export const deleteproductfrombasket= (id) => ({
  type:DELETE_BASKET,
  payload: {id}
});