import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Routes , Route} from 'react-router-dom';
import Homee from './Components/Home/home';
import Register from './Components/Register/register';
import Login from './Components/Login/login';
import HomeProducts from './Components/Home/HomeProduct.js';
import Profile from './Components/Profile/profile.js';
import Basket from './Components/Basket/basket.js';
import Product from './Components/Product/product.js';
import Payment from './Components/Payment/payment.js';
import Userlist from './Components/UserList/userlist.js';
import Addproduct from './Components/AddProduct/addproduct.js';
import Editproduct from './Components/EditProduct/editproduct.js';
import Editprofile from './Components/EditProfile/editprofile.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './Redux/Actions/ActionProduct';
import { useEffect } from 'react';
import { getCurrent } from './Redux/Actions/ActionUser.js';
import PrivateRoute from './Components/Routes/PrivateRoutes.js';
import Livreur from './Components/Livreur/Livreur.js';



function App() {
  
  const dispatch=useDispatch()
  useEffect(() => {
     dispatch(getAllProducts())
     dispatch(getCurrent())

  }, [])
    


  
  return (
    
    <div>
    
    <Routes>
      <Route path='/' element={<Homee/>}/>
      <Route path='/home' element={<HomeProducts/>}/>
      <Route path='/payment'  element={<PrivateRoute><Payment/></PrivateRoute>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/HealthCare' element={<PrivateRoute><Product/></PrivateRoute>}/>
      <Route path='/product/Beautycare' element={<PrivateRoute><Product/></PrivateRoute>}/>
      <Route path='/product/MedicalMaterial' element={<PrivateRoute><Product/></PrivateRoute>}/>
      <Route path='/addproduct' element={<PrivateRoute><Addproduct/></PrivateRoute>}/>
      <Route path='/editproduct/:id' element={<PrivateRoute><Editproduct/></PrivateRoute>}/>
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path='/editprofile' element={<PrivateRoute><Editprofile/></PrivateRoute>}/>
      <Route path='/basket' element={<PrivateRoute><Basket/></PrivateRoute>}/>
      <Route path='/userlist' element={<PrivateRoute><Userlist/></PrivateRoute>}/>
      <Route path='/Livreur' element={<Livreur/>}/>
  </Routes>
  </div>
  );
}

export default App;
