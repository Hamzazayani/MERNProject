
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./basket.css"; 
import { deleteproduct, deleteproductfrombasket } from '../../Redux/Actions/ActionProduct'
import { Link, useNavigate } from 'react-router-dom';

function Basket() {
  const basketItems = useSelector(state => state.basketReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log(basketItems)
var total=0
 
 
  {basketItems.map((el)=>total=total+el.newprice)}
console.log(total)




const handleDelete = (id) => {
  dispatch(deleteproductfrombasket(id));
};

  return (
    <div>
      <h1>Product Basket</h1>
      <div className="item-list">
        {basketItems.map((item) => 
 
          <div key={item.id} className="item">
            <div className="item-details">
              <div className="item-name">{item.newtitle}</div>
              <div className="item-price">${item.newprice}</div>
            </div>
            <div className="item-controls">
              <button className="control-button" onClick={() => handleDelete(item.id)}>
                Remove
              </button>
            </div>
          </div>
        )}
        
      </div>
      <div className="total">
        <div className="total-label">Total:</div>
        <div className="total-price">${total}</div>
      </div>
       <button onClick={() => dispatch(deleteproduct(),navigate("/payment"))} className="next-button">Next</button>
    </div>
  );
}



export default Basket;
