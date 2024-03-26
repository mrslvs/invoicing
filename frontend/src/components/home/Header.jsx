import React from 'react';
import '../../assets/styles/home/header.css';

const Header = ({ selection, setSelection }) => {
    const basicClasses = 'home-header-button home-animated-hover';
    // const isActive = this.value === selection;
    return (
        <header className="home-header">
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="login"
                className={
                    selection === 'login' ? basicClasses + ' home-header-active' : basicClasses
                }
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="about"
                className={
                    selection === 'about' ? basicClasses + ' home-header-active' : basicClasses
                }
            >
                About
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value);
                }}
                value="register"
                className={
                    selection === 'register' ? basicClasses + ' home-header-active' : basicClasses
                }
            >
                Register
            </button>
        </header>
    );
};

export default Header;
