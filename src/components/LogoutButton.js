import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import React from 'react'


function LogoutButton() {
    const {logout} =useAuth0();
    return (
        <div>
            <button onClick={()=>logout()}>
                Log out</button>
        </div>
    )
}

export default LogoutButton
