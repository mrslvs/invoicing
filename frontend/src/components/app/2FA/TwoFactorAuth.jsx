import React from 'react';
import { useEffect, useState } from 'react';
import TextInput from '../../home/content/TextInput';
import useTranslation from '../../../hooks/useTranslation';

const TwoFactorAuth = () => {
    const { t } = useTranslation();

    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    useEffect(() => {
        setIsPhoneValid(isPhoneValidSlovakia(phone));
    }, [phone]);

    const isPhoneValidSlovakia = (phone) => {
        let publicAndPagingNetwork = phone >= 901000000 && phone <= 919999999;
        let publicNetwork = phone >= 940000000 && phone <= 959999999;

        let output = !isNaN(phone) && (publicAndPagingNetwork || publicNetwork);
        return output;
    };

    return (
        <div>
            <TextInput
                label={t('home-input-placeholder-phone')}
                id={'phone'}
                type="text"
                isValid={isPhoneValid}
                onChange={(e) => setPhone(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            />
        </div>
    );
};

export default TwoFactorAuth;
