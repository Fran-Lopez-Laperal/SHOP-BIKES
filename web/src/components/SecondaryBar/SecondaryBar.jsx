import { useNavigate } from 'react-router'
import './SecondaryBar.css'

function Secondarybar() {
    const navigate = useNavigate()

    function handleSearch(e) {
        const { search } = e.target.elements
        e.preventDefault()
        navigate(`/products?name=${search.value}`)
    }

    return (
        <div className='secondary-bar mt-2 rounded-3 '>
             <div className='form-search'>
          <form onSubmit={handleSearch} className="d-flex p-2 secondary-form mt-3 ">
            <input name='search' className="form-control me-2" type="search" placeholder="Busqueda de productos" aria-label="Search" />
            <div className='search-icon'>
              <button className="btn success" type="submit"><i className='fa fa-search'></i></button>
            </div>
          </form>
        </div>
        </div>

    )
}

export default Secondarybar