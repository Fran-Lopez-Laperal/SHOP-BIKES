
import './NavBar.css'
import { useNavigate } from "react-router-dom";



function NavBar() {

  const navigate = useNavigate()

  const handleSearch = (event) => {
    console.log(event)
    const { search } = event.target.elements
    event.preventDefault()
    navigate(`/products?name=${search.value}`)
  }

  return (
    <nav className="navbar navbar-light bg-light">
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
            <span className='ms-3' style={{ color: 'red' }}>BIKE</span>
            -
            <span style={{ color: 'black' }}>LOCKER</span></div>
        </div>

        <form onSubmit={handleSearch} className="d-flex">
          <input name='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar