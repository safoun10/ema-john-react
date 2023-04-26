import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = { displayName: "Al Katra" }
    const authInfo = {
        user

    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;