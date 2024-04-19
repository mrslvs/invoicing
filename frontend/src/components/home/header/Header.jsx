import React from 'react';
import HeaderButton from './HeaderButton';
import useTranslation from '../../../hooks/useTranslation';

const Header = ({ selection, setSelection }) => {
    const { lng, t } = useTranslation();

    return (
        <header className="home-header">
            <HeaderButton
                buttonText={t('home-header-login-button')}
                selection={selection}
                setSelection={setSelection}
            />
            <HeaderButton
                buttonText={'About'}
                selection={selection}
                setSelection={setSelection}
                additionalClasses={'border-primaryBlue border-r border-l'}
            />
            <HeaderButton
                buttonText={'Register'}
                selection={selection}
                setSelection={setSelection}
            />
        </header>
    );
};

export default Header;
