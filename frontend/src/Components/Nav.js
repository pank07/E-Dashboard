import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }

  return (
    <div className='container-fluid'>
      <nav className='wel-text'>
        {/* <marquee>Welcome to E-dashboard</marquee> */}
        {
          auth ? (
            <ul className='navbar mt-5'>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/addproduct">Add Product</Link> </li>
              <li><Link to="/update/:id">Update Product</Link> </li>
              {/* <li><Link to="/about">About us</Link> </li>
              <li><Link to="/contact">Contact us</Link> </li> */}
              <li><Link onClick={logout} to="/signup">Logout</Link></li>
            </ul>) : (
            <ul className='navbar2'>
              {/* <li><Link to="/signup">Sign Up</Link></li> */}
              {/* <li><Link to="/login">Login</Link></li> */}
            </ul>)
        }
      </nav>
      <img className="logo" alt='logo' src='./logo.jpg' />
      <div>{auth && <span className='text-warning mx-5 fw-bold fs-3'>Welcome,{JSON.parse(auth).name}!</span>}</div>

    </div>
  )
}

export default Nav;
