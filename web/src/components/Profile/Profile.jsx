import { AuthContext } from "../../contexts/AuthContext"
import React from "react"
import './Profile.css'
import { Link } from "react-router-dom"



function Profile() {

  const { handleLogout, user } = React.useContext(AuthContext)



  return (
    <div className="profile mb-5 mt-5 col-6 text-cente">
      <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-center">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.adress}</p>
          <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
        </div>
        <div>
          <button></button>
        </div>
        <div className="card-footer text-muted">
          {(user.role === 'admin') && (
            <div className="text-center">
              <hr />
              <Link to='/create' className="btn btn-success ">Añadir producto</Link>
            </div>
          )}
        </div>
      </div>

    </div>


  )
}

export default Profile