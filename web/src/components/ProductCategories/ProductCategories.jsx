import './ProductCategories.css'
import React from 'react'
import { Link } from 'react-router-dom';
import bikeImage from '../../assets/images/nueva-scott-spark-2022-20.jpeg'
import accesoryImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.43.23.png'
import electronicImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.12.png'
import clothesImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.01.png'


function ProductCategories() {


    return (
        <div className='product-category d-flex justify-content-center'>
            <div className='category-group'>
                <Link to="/products?category=bike">
                    <div className='bike-category mb-5' id='box'>
                        <img src={bikeImage} alt={bikeImage} />
                        <p>BICICLETAS</p>
                    </div>
                </Link>

                <Link to="/products?category=accesory">
                    <div className='accesory-category' id='box'>
                        <img src={accesoryImage} alt={accesoryImage} />
                        <p>COMPONENTES</p>
                    </div>
                </Link>
            </div>

            <div className='category-group'>
                <Link to="/products?category=elctronic">
                    <div className='electronic-category mb-5' id='box'>
                        <img src={electronicImage} alt={electronicImage} />
                        <p>ELECTRONICA</p>
                    </div>
                </Link>
                <Link to="/products?category=clothes">
                    <div className='clothes-category' id='box'>
                        <img src={clothesImage} alt={clothesImage} />
                        <p>ROPA</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default ProductCategories
