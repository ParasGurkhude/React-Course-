// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/styles.css'

const UserProfile = () => {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <button 
                        className="light-mode"
                        onClick={logout}
                        style={{ marginTop: '20px' }}
                    >Logout</button>
                </div>
            ) : (
                <button 
                    className="dark-mode" 
                    onClick={() => login({ name: 'John Doe' })} 
                    style={{ marginTop: '20px' }}
                >Login</button>
            )}
        </div>
    );
};

export default UserProfile;
