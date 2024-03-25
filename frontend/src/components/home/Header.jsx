import React from 'react';
import '../../assets/styles/home/header.css';

const Header = ({ setSelection }) => {
    return (
        <header className="home-header">
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="login"
                className="home-header-button home-animated-hover"
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="about"
                className="home-header-button home-animated-hover"
            >
                About
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="register"
                className="home-header-button home-animated-hover"
            >
                Register
            </button>
        </header>
    );
};

export default Header;
