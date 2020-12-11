import app from './base';

import React, {useState, useEffect, Children } from 'react'


export const AuthContext=React.createContext();

export const AuthProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
                {children}
            </AuthContext.Provider>
    );

}