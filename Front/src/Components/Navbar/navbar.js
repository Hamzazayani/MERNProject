import React from 'react';
import "./navbar.css";
import { Link,  } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector(state => state.userReducer.currentuser)
  console.log(user)
  const token = localStorage.getItem("token");
  const basketItems = useSelector(state=> state.basketReducer.items);
console.log(basketItems)
  return (
    <div className="rabyyehdi">
      <nav>
        <div className="logo">
          <div className="logo-text">HealthCare</div>
          <div className="logo-subtext">OnlinePharmacy</div>
        </div>
        <ul className="nav-links">
          {window.location.pathname!=="/home"&&token ? <Link to={'/home'}><li>Home</li></Link> :null}
         { !token ? <Link to={'/Register'}><li>Register</li></Link>:null}
        { !token ? <Link to={'/login'}><li>Login</li></Link>:null}
         { token ? <Link to={'/profile'}><li>Profile</li></Link>:null}
         { token  && user.role=="Admin" && user.role!="DeliveryPerson"  ?  <Link to={"/userlist"}> <li> <button> User List </button>  </li></Link>:null}
        </ul>
          {/* Basket */}
          <div className="basket">
          { token && user.role!=="Admin"  && user.role!="DeliveryPerson"  ?  <Link to="/basket" className="basket-link">
        <svg
          className="basket-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="9" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M21 15s-1.5-4.5-4-4.5h-11C4.5 10.5 3 15 3 15" />
          <path d="M21 15a6.01 6.01 0 0 1-3 5.1" />
        </svg>
        <span className="basket-count">{basketItems ? basketItems.length : 0}</span>
      </Link>:null}
    </div>
        
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

