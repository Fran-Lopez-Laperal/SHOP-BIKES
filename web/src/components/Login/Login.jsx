
import React from "react";
import './Login.css'
import { Navigate, useNavigate, } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/api-service"
// import { GoogleLogin } from 'react-google-login';


function Login() {

    // const responseGoogle = (response) => {
    //     console.log(response)
    // }
   

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
        return <Navigate to='/' />
    }


    return (
        <div className="login col-4 mb-5 mt-5 p-2 border rounded-3 p-5">
          
            <h3 className="text-center mb-5 mt-3">Iniciar de Sesión</h3>
            <form className="" onSubmit={handleSubmit} >

                <div className="mb-3">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <label for="exampleInputEmail1" className="form-label">
                        Email de usuario
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
                    <label for="exampleInputPassword1" className="form-label">
                        Contraseña
                    </label>
                    <input
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
        </div>

    )

}

export default Login