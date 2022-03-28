
import './NavBar.css'
import { Link } from "react-router-dom";
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';



function NavBar() {
  const { user } = React.useContext(AuthContext)


  return (
    <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <div className='logo-head p-1'>
            <div className='logo-letters'>
              <span style={{ color: 'red' }}>B</span>
              <span>-</span>
              <span>D</span>
            </div>
          </div>
          <div className='logo-name'>
            <Link to='/'>
              <span className='ms-3' style={{ color: 'red' }}>BIKE</span>
              -
              <span style={{ color: 'black' }}>LOCKER</span>
            </Link>
          </div>
        </div>
        <div className='d-flex div-cart'>
          <div className='logo-user' style={{width: '30px'}}>
            {user && (
              <Link className='user-name' to='/profile'>
              <i class="fa fa-user-o" aria-hidden="true"></i>
              </Link>
            
            )}
          </div>

          <Link to='/shopping-cart'>
            <i class="fa fa-shopping-basket logo-basket" aria-hidden="true"></i>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar