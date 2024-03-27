import React from 'react';
import '../../assets/styles/home/header.css';
import HeaderButton from './HeaderButton';

const Header = ({ selection, setSelection }) => {
    // const basicClasses = 'home-header-button home-animated-hover';
    // const isActive = this.value === selection;
    return (
        <header className="home-header">
            <HeaderButton buttonText={'Login'} selection={selection} setSelection={setSelection} />
            <HeaderButton buttonText={'About'} selection={selection} setSelection={setSelection} />
            <HeaderButton
                buttonText={'Register'}
                selection={selection}
                setSelection={setSelection}
            />
        </header>
    );
};

export default Header;
