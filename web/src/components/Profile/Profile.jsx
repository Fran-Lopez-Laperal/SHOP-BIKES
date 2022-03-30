import { AuthContext } from "../../contexts/AuthContext"
import React from "react"
import './Profile.css'
import { Link } from "react-router-dom"



function Profile() {

  const { handleLogout, user } = React.useContext(AuthContext)

  return (
    <div className="profile mb-5 mt-5 col-6 text-cente">
      <div class="card">
        <div class="card-header">
        </div>
        <div class="card-body text-center">
          <h5 class="card-title text-center">{user.name}</h5>
          <p class="card-text">{user.email}</p>
          <button onClick={handleLogout} class="btn btn-danger">Cerrar Sesión</button>
        </div>
        <div class="card-footer text-muted">
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