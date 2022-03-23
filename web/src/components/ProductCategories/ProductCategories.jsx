import './ProductCategories.css'
import React from 'react'
import { Link } from 'react-router-dom';
import bikeImage from '../../assets/images/nueva-scott-spark-2022-20.jpeg'
import accesoryImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.43.23.png'
import electronicImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.12.png'
import clothesImage from '../../assets/images/Captura de Pantalla 2022-03-22 a las 18.38.01.png'


function ProductCategories() {

   
    return (
        <div className='home d-flex'>
            <div className='category-group'>
                <div className='bike-category mb-5'>
                    <img src={bikeImage} alt={bikeImage} />
                    <Link to="/products?category=bikes">
                        <p>BICICLETAS</p>
                    </Link>
                </div>
                <div className='accesory-category'>
                    <img src={accesoryImage} alt={accesoryImage} />
                    <Link to={""}>
                        <p><i className='fa fa-home'></i>ELECTRONICA</p>
                    </Link>

                </div>
            </div>
            <div className='category-group'>
                <div className='electronic-category mb-5'>
                    <img src={electronicImage} alt={electronicImage} />
                    <Link to={""}>
                        <p>COMPONENTES</p>
                    </Link>

                </div>
                <div className='clothes-category'>
                    <img src={clothesImage} alt={clothesImage} />
                    <Link to={""}>
                        <p>ROPA</p>
                    </Link>

                </div>
            </div>
        </div>
    )
}


export default ProductCategories
