import React from 'react';
import User from './header/User';
import { FaUserGroup } from 'react-icons/fa6';
import '../../assets/styles/app/header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h3 className="app-header-h3">NameNameN</h3>
            <nav className="app-header-nav">
                <p>fake nav 1</p>
                <p>fake nav 2</p>
                <p>fake nav 3</p>
                <button>
                    <FaUserGroup />
                </button>

                {/* <User /> */}
            </nav>
        </header>
    );
};

export default Header;
