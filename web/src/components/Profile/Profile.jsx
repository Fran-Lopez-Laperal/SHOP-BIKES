import { AuthContext } from "../../contexts/AuthContext"
import React from "react"
import './Profile.css'
import { Link } from "react-router-dom"

function Profile() {

  const { handleLogout, user } = React.useContext(AuthContext)

  return (
    <div className="div-profile">
      <div className="profile mb-5 mt-5">
        <div className="card-profile">
          <div className="card-header">
          </div>
          <div className="card-body text-center">
            <h1 className="card-title text-center mt-2">{user.name}</h1>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.adress}</p>
            <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
          </div>
          <div className="card-footer text-muted">
            {(user.role === 'admin') && (
              <div className="text-center">
                <hr />
                <Link to='/create' className="btn btn-success">Añadir producto</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile