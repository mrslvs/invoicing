import React from 'react';
import HeaderButton from './HeaderButton';

const Header = ({ selection, setSelection }) => {
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
