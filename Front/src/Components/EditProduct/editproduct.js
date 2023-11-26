import React, { useEffect, useState } from 'react'
import "./editproduct.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { editproduct } from '../../Redux/Actions/ActionProduct';

function Editproduct() {
 
  const [img, setimg] = useState();

  const [updateone, setupdateone] = useState()

  const navigate = useNavigate();
  const dispatch=useDispatch()
  const obj=useParams()
 
  const Products=useSelector(state=>state.productReducer.products)
  console.log(Products)
  const product=Products.find(el=>el._id==obj.id)
 console.log(product)
  useEffect(() => {
   setupdateone(product)
      
  }, []);


 
 
  const handlesubmit =(e)=>{
    e.preventDefault()
   
    const data = new FormData();

    data.append("title",updateone.title)
    data.append("description", updateone.description)
   data.append("price",updateone.price)
    data.append("file",img)
    data.append("category",updateone.category)
  dispatch(editproduct(product._id,data,navigate))
    
  }

  
  return (
    <div className='adwya'>
  <div className='all'>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="custom-product-form-unique">
    <h2 className="custom-product-heading-unique">edit Product</h2>
    <form id="product-form" encType="multipart/form-data" onSubmit={handlesubmit}   >
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Title:</div>
        <input type="text"  placeholder={updateone&&updateone.title}   onChange={(e) => setupdateone({...updateone,title:e.target.value})}  className="custom-input" id="title" name="title" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Description:</div>
        <textarea   placeholder={updateone&&updateone.description}  onChange={(e) => setupdateone({...updateone,description:e.target.value})}
          id="description" name="description" required defaultValue={""} />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Price:</div>
        <input type="number"  placeholder={updateone&&updateone.price}    onChange={(e) => setupdateone({...updateone,price:e.target.value})} className="custom-input" id="price" name="price" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product category:</div>
        <select onChange={(e) => setupdateone({...updateone,category:e.target.value})} className="custom-input" id="title" name="title" required >
  <option value="HealthCare">HealthCare</option>
  <option value="Beautycare">Beautycare</option>
  <option value="MedicalMaterial">MedicalMaterial</option>
  
</select>
</div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Image:</div>
        <input type="file" onChange={(e) => setimg(e.target.files[0])}   className="custom-input" id="image" name="image" accept="image/*" required />
      </div>
       <button onClick={handlesubmit} className="custom-buttonnn" type="submit">Edit Product</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Editproduct