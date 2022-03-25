
import React from "react";
import { Navigate, useNavigate,  } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import {login} from "../../services/api-service"

function Login() {

    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
  

    const {handleLogin, user} = React.useContext(AuthContext)

    function handleChange(e) {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault(e);

        login(data)
            .then((response) => {
                handleLogin(response.data)
                navigate('/')
            })
            .catch((err) => {
                setError(err.response.data.message);
              });
    }

    if(user){
        return <Navigate to='/'/>
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                {error && <div className="alert alert-danger">{error}</div>}
                <label for="exampleInputEmail1" className="form-label">
                    Email address
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
                Login
            </button>

        </form>
    )

}

export default Login