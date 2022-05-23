
import React from "react";
import './Login.css'
import { Navigate, useNavigate, } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/api-service"
import { Link } from "react-router-dom";


function Login() {

    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const [error, setError] = React.useState(null);
    const navigate = useNavigate();


    const { handleLogin, user } = React.useContext(AuthContext)

    function handleChange(e) {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault(e);

        login(data)
            .then((user) => {
                handleLogin(user)
                navigate('/')
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    }

    if (user) {
        return <Navigate to='/home' />
    }


    return (
        <div className="login-div">
            <div className="login mb-5 mt-5 border rounded-3">
                <h3 className="text-center mb-5 mt-5">Iniciar de Sesión</h3>
                <form className="" onSubmit={handleSubmit} >

                    <div className="mb-3 input-form">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input
                            placeholder="Email usuario"
                            type="email"
                            className="form-control"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            placeholder="Contraseña"
                            type="password"
                            className="form-control"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-12">
                        Login
                    </button>
                </form>
                <div className='logo-name-login'>
                    <Link to='/home'>
                        <span style={{ color: 'red' }}>BIKE</span>
                        -
                        <span style={{ color: 'black' }}>LOCKER</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login