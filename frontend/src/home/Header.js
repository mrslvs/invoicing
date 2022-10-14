import React from 'react';

const Header = ({ setSelection }) => {
    const styleActiveButton = (activeButton) => {
        const loginButton = document.querySelector('.login-btn');
        const aboutButton = document.querySelector('.about-btn');
        const registerButton = document.querySelector('.register-btn');
        [loginButton, aboutButton, registerButton].forEach((btn) => {
            if (btn.classList.contains('btn-active')) {
                btn.classList.remove('btn-active');
            }
        });
        activeButton.classList.add('btn-active');
    };

    return (
        <header className="home-header">
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                    styleActiveButton(document.querySelector('.login-btn'));
                }}
                value="login"
                className="home-header-btn login-btn btn-active"
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                    styleActiveButton(document.querySelector('.about-btn'));
                }}
                value="about"
                className="home-header-btn about-btn"
            >
                About
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                    styleActiveButton(document.querySelector('.register-btn'));
                }}
                value="register"
                className="home-header-btn register-btn"
            >
                Register
            </button>
        </header>
    );
};

export default Header;
