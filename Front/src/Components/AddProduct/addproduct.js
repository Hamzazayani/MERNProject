import React, { useState } from 'react'
import "./addproduct.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addproduct } from '../../Redux/Actions/ActionProduct';


function Addproduct() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState();
  const [Category, setcategory] = useState("HealthCare");
  

  const navigate = useNavigate();
  const dispatch=useDispatch()
  
  const handlesubmit =(e)=>{
    e.preventDefault()
   
    const data = new FormData();

    data.append("title",title)
    data.append("description", description)
    data.append("price",price)
    data.append("file",img)
    data.append("category",Category)
  dispatch(addproduct(data,navigate))
    console.log("first")
  }

  
  return (
    <div className='adwya'>
  <div className='all'>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="custom-product-form-unique">
    <h2 className="custom-product-heading-unique">Add Product</h2>
    <form id="product-form" encType="multipart/form-data" onSubmit={handlesubmit}   >
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Title:</div>
        <input type="text" onChange={(e) => settitle(e.target.value)}  className="custom-input" id="title" name="title" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Description:</div>
        <textarea onChange={(e) => setdescription(e.target.value)}
          id="description" name="description" required defaultValue={""} />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Price:</div>
        <input type="number"  onChange={(e) => setprice(e.target.value)} className="custom-input" id="price" name="price" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product category:</div>
        <select onChange={(e) => setcategory(e.target.value)} className="custom-input" id="title" name="title" required defaultValue={"HealthCare"}>
  <option value="HealthCare">HealthCare</option>
  <option value="Beautycare">Beautycare</option>
  <option value="MedicalMaterial">MedicalMaterial</option>
  
</select>
</div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Image:</div>
        <input type="file" onChange={(e) => setimg(e.target.files[0])}   className="custom-input" id="image" name="image" accept="image/*" required />
      </div>
       <button onClick={handlesubmit} className="custom-buttonnn" type="submit">Add Product</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Addproduct