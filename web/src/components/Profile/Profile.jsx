import { AuthContext } from "../../contexts/AuthContext"
import React from "react"


function Profile () {

    const {handleLogout, user} = React.useContext( AuthContext)

    return(
        <div className="profile">
          {user.name}
        </div>
    )
}

export default Profile