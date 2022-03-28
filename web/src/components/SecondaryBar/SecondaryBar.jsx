import { useNavigate } from 'react-router-dom'
import './SecondaryBar.css'

function Secondarybar() {

    const navigate = useNavigate()
    function handleSearch(e) {

        const { search } = e.target.elements
        e.preventDefault()
        navigate(`/products?name=${search.value}`)

    }

    return (
        <div className='secondary-bar mt-4'>
            <form onSubmit={handleSearch} className="d-flex p-2">
                <input name='search' className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                <div className='search-icon'>
                    <button className="btn success" type="submit"><i className='fa fa-search'></i></button>
                </div>
            </form>
        </div>
    )
}

export default Secondarybar