import { Link} from "react-router-dom";
import './Footer.css'
import React from "react";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-div d-flex justify-content-between px-5'>
                <div className='footer-ul footer-table  mt-3 '>
               
                    <ul className='footer-table-media'>
                        <li className='fw-bold mb-2'>Sobre nosotros
                        </li>
                        <Link to='#'>
                        <li>
                            <i className="me-3 fa fa-facebook-official"></i>
                            Facebook
                        </li>
                        </Link>
                        <Link to='#'>
                        <li className="d-flex">
                            <i className="me-3 fa fa-instagram"></i>
                            Instagram
                        </li>
                        </Link>
                        <Link to='#'>
                        <li>
                            <i className="me-3 fa fa-envelope-o"></i>
                            Contacto
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className='footer-ul mt-3'>
                    <ul className='footer-table'>
                        <li className='fw-bold mb-2'>Grantías</li>
                        <Link to='#'>
                        <li>
                            Devoluciones
                        </li>
                        </Link>
                        <Link to='#'>
                        <li>
                            Plazos de entrega
                        </li>
                        </Link>
                        <Link to='#'>
                        <li>
                            Métodos de pago
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className='footer-ul mt-3 me-5'>
                    <ul className='footer-table'>
                        <li className='fw-bold mb-2'>Atencion al cliente</li>
                        <Link to='#'>
                        <li>
                            Ayuda
                        </li>
                        </Link>
                        <Link to='#'>
                        <li>
                            Seguimiento de pedidos
                        </li>
                        </Link>
                        <Link to='#'>
                        <li>
                            Gastos de envio
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer