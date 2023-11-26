import React, { useEffect } from 'react'
import "../Product/product.css"
import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket, addToBasket, getbyCategory } from '../../Redux/Actions/ActionProduct'
import { Link, useNavigate } from 'react-router-dom'
import { deleteproduct } from '../../Redux/Actions/ActionProduct'
import Navbar from '../Navbar/navbar'




function Product() {
  const Products=useSelector(state=>state.productReducer.productsbycategory)

  const dispatch=useDispatch()
  const url=window.location.pathname.slice(9)
 console.log(url)
  useEffect(() => {
    dispatch(getbyCategory(url))
}, [])

const handleDelete = (productid) => {
  
  dispatch(deleteproduct(productid));
};

useEffect(() => {
  
  dispatch(getbyCategory(url));
}, [dispatch, url, Products]);
  
  return (
    <>
    <Navbar/>
    
    
    <div className='disp'>

{Products.map((el) =>    <div  key={el._id}  className="card" style={{width: '18rem'}}>
  <img src={el.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.description}</p>
    <h4 className="card-price">{el.price}</h4>
    <button href="#" className="btn btn-primary" onClick={(e)=>dispatch(addToBasket(el.title,el.price))}  >+</button>
 <Link  to={`/editproduct/${el._id}`}  > <button href="#" className="btn btn-primary">Edit</button></Link>
 <button href="#" onClick={() => handleDelete(el._id)}  className="btn btn-primary">Delete</button>
  </div>
</div>)}
</div>
    </>
    )
}

export default Product