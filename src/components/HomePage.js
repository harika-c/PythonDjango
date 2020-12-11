import React from 'react';
import app from "../base";
function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>app.auth().signOut()} > Sign Out</button>
        </div>
    )
}

export default HomePage
