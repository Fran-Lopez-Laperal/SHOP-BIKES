import React from "react";
import './Register.css'
import { useNavigate } from "react-router";
import { register } from "../../services/api-service";
import { Link } from "react-router-dom";

function Register() {
    const [data, setData] = React.useState({
        email: '',
        name: '',
        password: ''
    });

    const navigate = useNavigate()

    const [error, setError] = React.useState(null)

    function handleChange(e) {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        register(data)
            .then((response) => {
                navigate('/login')
            })
            .catch((error) => {
                setError(error.response.data.message)
            })
    }

    return (

        <div className="register mt-5 border-3 rounded-3">
            <div className="register-info">
                <ul className="p-5">
                    <li className="">
                        <h2>Requisitos de registro</h2>
                    </li>
                    <li>
                        <small><i className="fa fa-check" aria-hidden="true"></i> Introducir un e-mail que ya no se haya utilizado anteriormente</small>
                    </li>
                    <li>
                        <small><i className="fa fa-check" aria-hidden="true"></i>Introducir una contraseña de al menos 9 caracteres sin espacios</small>
                    </li>
                    <li>
                        <small><i className="fa fa-check" aria-hidden="true"></i>Introducir tu nombre</small>
                    </li>
                </ul>
                <div className='logo-name-register text-center'>
                    <Link to='/'>
                        <span style={{ color: 'red' }}>BIKE</span>
                        -
                        <span style={{ color: 'black' }}>LOCKER</span>
                    </Link>
                </div>
            </div>

            <div className="div-form">
                <form className="p-5" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input
                            placeholder="Nombre Completo"
                            type="name"
                            className="form-control"
                            id="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            placeholder='example@example.es'
                            type="email"
                            className="form-control"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            placeholder='Contraseña'
                            type="password"
                            className="form-control"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            placeholder='Dirección completa'
                            type="adress"
                            className="form-control"
                            id="adress"
                            value={data.adress}
                            onChange={handleChange}
                        />
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-danger mb-3 col-12">
                        Registrarse
                    </button>
                    <div>
                        <Link to='/login' className="btn btn-primary col-12">
                            Iniciar Sesión
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register