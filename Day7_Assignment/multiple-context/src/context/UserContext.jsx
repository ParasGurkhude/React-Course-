// UserContext.js
import React, { createContext, useState } from 'react';

// Create UserContext
export const UserContext = createContext();

// Create UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Function to log in a user
    const login = (userData) => {
        setUser(userData);
    };

    // Function to log out the user
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
