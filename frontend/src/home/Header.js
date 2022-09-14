import React from 'react';
import '../css/Header.css';

const Header = ({ setSelection }) => {
    return (
        <header className="home-header">
            <button
                onClick={(e) => setSelection(e.target.value)}
                value="about"
                className="home-header-btn"
            >
                About
            </button>
            <button
                onClick={(e) => setSelection(e.target.value)}
                value="login"
                className="home-header-btn"
            >
                Login
            </button>
            <button
                onClick={(e) => setSelection(e.target.value)}
                value="register"
                className="home-header-btn"
            >
                Register
            </button>
        </header>
    );
};

export default Header;
