import React from 'react';
import HeaderButton from './HeaderButton';
import useTranslation from '../../../hooks/useTranslation';

const Header = ({ selection, setSelection }) => {
    const { t } = useTranslation();

    return (
        <header className="home-header">
            <HeaderButton
                buttonText={t('home-header-login-button')}
                id={'login'}
                selection={selection}
                setSelection={setSelection}
            />
            <HeaderButton
                buttonText={t('home-header-about-button')}
                id={'about'}
                selection={selection}
                setSelection={setSelection}
                additionalClasses={'border-primaryBlue border-r border-l'}
            />
            <HeaderButton
                buttonText={t('home-header-register-button')}
                id={'register'}
                selection={selection}
                setSelection={setSelection}
            />
        </header>
    );
};

export default Header;
