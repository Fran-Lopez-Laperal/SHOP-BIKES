
import './NavBar.css'
import { Link} from "react-router-dom";
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';



function NavBar() {
  const { user } = React.useContext(AuthContext)

  return (

    <>
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
            <div className='logo-user'>

              {!user ? (
                <div className='d-flex'>
                  <div className='d-flex me-3'>
                    <Link className='user-register text-center' to='/register'>
                      <i className="fa fa-user-plus" ></i>
                      <span className='register'>Registro</span>
                    </Link>
                  </div>
                  <div className='d-flex'>
                    <Link className='user-register text-center' to='/login'>
                      <i className="fa fa-sign-in" ></i>
                      <span className='register'>Inicio sesión</span>
                    </Link>
                  </div>
                </div>
              )
                :
                <div className='profile-div d-flex '>
                  <Link className='user-profile text-center' to='/profile'>
                    <i className="fa fa-user" ></i>
                    <span className='register '>{user.name.slice(0, 4)}</span>
                  </Link>
                </div>
              }
            </div>

            {user &&
              <div className='cart-icon d-flex'>
                <Link className='text-center' to='/shopping-cart'>
                  <i className="fa fa-shopping-basket logo-basket" ></i>
                  <span className='register'>Mi carrito</span>
                </Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar