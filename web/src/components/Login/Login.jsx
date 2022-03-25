
import axios from "axios";
import React from "react";

function Login() {

    const [data, setData] = React.useState({
        email:'',
        password:''
    })

    function handleChange(e) {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault(e)
        axios.post('http://localhost3001/login')
    }


    return (
        <form onSubmit={handleSubmit}>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" class="btn btn-primary">
                Login
            </button>

        </form>
    )

}

export default Login