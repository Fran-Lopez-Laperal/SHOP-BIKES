import React from "react";
import './Register.css'
import { useNavigate } from "react-router";
import { register } from "../../services/api-service";

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
        <div className="register">
            <ul className="register-info p-4">
                <li className="">
                    <h2>Requisitos para registrarse</h2>
                </li>
                <li>
                    <small>Introducir un e-mail que ya no se haya utilizado anteriormente</small>
                </li>
                <li>
                    <small>Introducir una contraseña de al menos 9 caracteres sin espacios</small>
                </li>
                <li>
                    <small>Introducir tu nombre</small>
                </li>

            </ul>

            <div className="register-form col-4">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <label for="name" className="form-label">
                            User Name
                        </label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>



                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Register