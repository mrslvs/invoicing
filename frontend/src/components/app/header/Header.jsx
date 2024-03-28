import React, { useState } from 'react';
import User from './User';
import { FaUserGroup } from 'react-icons/fa6';
import '../../../assets/styles/app/header.css';

const Header = () => {
    const [showUser, setShowUser] = useState(false);

    const handleShowUserMenu = () => {
        setShowUser(!showUser);
        // console.log('show user menu');
    };

    return (
        <header className="app-header">
            <h3 className="app-header-logo">NameNameN</h3>
            <nav className="app-header-nav">
                <button onClick={handleShowUserMenu}>
                    <FaUserGroup />
                </button>

                {showUser ? <User /> : null}
            </nav>
        </header>
    );
};

export default Header;
