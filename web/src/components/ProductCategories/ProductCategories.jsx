import './ProductCategories.css'
import React from 'react'
import { Link } from 'react-router-dom';
import bikeImage from '../../assets/images/nueva-scott-spark-2022-20.jpeg'
import accesoryImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.43.23.png'
import electronicImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.12.png'
import clothesImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.01.png'


function ProductCategories() {


    return (
        <div className='product-category d-flex flex-wrap  justify-content-center mb-5 rounded-3 border-3'>
           
                <Link to="/products?category=bicis">
                    <div className='category rounded-3' id='box'>
                        <img src={bikeImage} alt={bikeImage} />
                        <p>BICICLETAS</p>
                    </div>
                </Link>

                <Link to="/products?category=components">
                    <div className='category rounded-3' id='box'>
                        <img src={accesoryImage} alt={accesoryImage} />
                        <p>COMPONENTES</p>
                    </div>
                </Link>
        

            
                <Link to="/products?category=electronic">
                    <div className='category   rounded-3' id='box'>
                        <img src={electronicImage} alt={electronicImage} />
                        <p>ELECTRONICA</p>
                    </div>
                </Link>
                <Link to="/products?category=clothes">
                    <div className='category rounded-3' id='box'>
                        <img src={clothesImage} alt={clothesImage} />
                        <p>ROPA</p>
                    </div>
                </Link>
        </div>
    )
}

export default ProductCategories
