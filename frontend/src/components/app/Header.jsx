import React, { useState } from 'react';
import User from './header/User';
import { FaUserGroup } from 'react-icons/fa6';
import '../../assets/styles/app/header.css';

const Header = () => {
    const [showUser, setShowUser] = useState(false);

    const handleShowUserMenu = () => {
        setShowUser(!showUser);
        // console.log('show user menu');
    };

    return (
        <header className="app-header">
            <h3 className="app-header-h3">NameNameN</h3>
            <nav className="app-header-nav">
                <p>fake nav 1</p>
                <p>fake nav 2</p>
                <p>fake nav 3</p>
                <button onClick={handleShowUserMenu}>
                    <FaUserGroup />
                </button>

                {showUser ? <User /> : null}
            </nav>
        </header>
    );
};

export default Header;
