import { Link, useNavigate } from 'react-router-dom'
import './SecondaryBar.css'

function Secondarybar() {

    const navigate = useNavigate()
    function handleSearch(e) {

        const { search } = e.target.elements
        e.preventDefault()
        navigate(`/products?name=${search.value}`)

    }

    return (
        <>
            <ul className='d-flex category-table mt-2 ms-5'>
                <li className='col-3'><Link to="/products?category=bike">Bicicletas</Link></li>
                <li className='col-3'><Link to="/products?category=components">Componentes</Link></li>
                <li className='col-3'><Link to="/products?category=clothe">Ropa</Link></li>
                <li className='col-3'><Link to="/products?category=tencnology">Tecnología</Link></li>
            </ul>
            <div className='secondary-bar mt-4'>
                <form onSubmit={handleSearch} className="d-flex p-2 secondary-form">
                    <input name='search' className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <div className='search-icon'>
                        <button className="btn success" type="submit"><i className='fa fa-search'></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Secondarybar