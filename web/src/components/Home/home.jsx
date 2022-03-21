import './home.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { getProducts } from '../API-services/API-services'

function Home() {

    const [products, setProducts] = React.useState(null)

    React.useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data)
        });
    }, []);


    if (!products) {
        return null;
    }
    return (
        <div className='d-flex flex-wrap'>
            {products.map((product) => (
                <>
                    <Link to={`/products/${product.id}`}>
                        <div className='col-xl-3 col-md-4 col-sm-6 col-xs-12 me-4 '>
                            <div className='card mt-5' key={product.name} style={{ width: '18rem' }}>
                                <img className='icard-img-top' src={product.image} alt={product.name} />
                                <div className='card-body'>
                                    <h5 className='card-text'>{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>
            )
            )}
        </div>
    )
}


export default Home


