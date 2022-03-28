
import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';



function NavBar() {
  const { user } = React.useContext(AuthContext)

  const navigate = useNavigate()

  const handleSearch = (event) => {
    console.log(event)
    const { search } = event.target.elements
    event.preventDefault()
    navigate(`/products?name=${search.value}`)
  }

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
            <Link to='/products'>
              <span className='ms-3' style={{ color: 'red' }}>BIKE</span>
              -
              <span style={{ color: 'black' }}>LOCKER</span>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="d-flex">
          <input name='search' className="form-control me-2" type="search" placeholder="Buscar en la tienda..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className='d-flex div-cart'>
          <h4>
            {user && (
              <Link className='user-name' to='/profile'>
                {user.name}
              </Link>
            )}
          </h4>
          
          <Link to='/shopping-cart'>
            <i className='fa fa-shopping-cart logo-cart'></i>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar