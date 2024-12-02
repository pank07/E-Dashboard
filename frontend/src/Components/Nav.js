import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Profile } from '../icons/user-solid.svg';
import {ReactComponent as Home} from '../icons/house-solid.svg';
import { ReactComponent as Logout } from '../icons/right-from-bracket-solid.svg';

function Nav() {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="container-fluid">
      <nav className="wel-text">
        <marquee>
        <img className="marquee-logo" alt="logo" src="./logo.jpg" /> Welcome to E-dashboard<br/>
        
        </marquee>
        
        {auth ? (
          <ul className="navbar btn-sm mt-5">
            <li>
              <Link to="/">
              <Home width='25' height='25'></Home></Link>
            </li>
            
            <li>
              <Link onClick={logout} to="/signup">
                Logout <Logout width="25" height="20" fill="black" />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar2">
            {/* Add navigation links for unauthenticated users if needed */}
          </ul>
        )}
      </nav>

      <img className="logo" alt="logo" src="./logo.jpg" />

      {auth && (
        <div>
          <span className="text-light mx-5 fw-bold fs-3">
            <Profile
              id="profile"
              width="50"
              height="25"
              fill="red"
              style={{ marginTop: '20px', marginBottom: '30px' }}
            />
            Welcome, {JSON.parse(auth).name}!
          </span>
        </div>
      )}
    </div>
  );
}

export default Nav;
