import React from 'react';

const Header = ({ setSelection }) => {
    return (
        <header className="home-header">
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="login"
                className="home-header-button"
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="about"
                className="home-header-button"
            >
                About
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="register"
                className="home-header-button"
            >
                Register
            </button>
        </header>
    );
};

export default Header;
