import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import useTranslation from '../../../hooks/useTranslation';

function Register() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [pwd, setPwd] = useState('');
    const [isPwdValid, setIsPwdValid] = useState(false);

    const [pwdRepeat, setPwdRepeat] = useState('');
    const [isPwdRepeatValid, setIsPwdRepeatValid] = useState(false);

    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const disabled = !(isEmailValid && isPwdValid && isPwdRepeatValid && isPhoneValid);

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setIsEmailValid(emailRegex.test(email));
    }, [email]);

    useEffect(() => {
        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.{12,}).*$/;
        setIsPwdValid(pwdRegex.test(pwd));
    }, [pwd]);

    useEffect(() => {
        setIsPwdRepeatValid(isPwdValid && pwdRepeat === pwd);
    }, [pwdRepeat]);

    useEffect(() => {
        setIsPhoneValid(isPhoneValidSlovakia(phone));
    }, [phone]);

    const register = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const registerData = {
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
            phone: document.getElementById('phone').value,
        };
        console.log(registerData);

        try {
            const response = await axiosInstance.post('/auth/register', registerData, {
                withCredentials: true,
            });

            // console.log('registered successfully');
        } catch (err) {
            const status = err.response?.status || 500;

            setIsLoading(false);

            status === 500
                ? setErrorMessage('home-error-message-server-error')
                : setErrorMessage('home-error-message-user-already-exists');
        }
    };

    const isPhoneValidSlovakia = (phone) => {
        let publicAndPagingNetwork = phone >= 901000000 && phone <= 919999999;
        let publicNetwork = phone >= 940000000 && phone <= 959999999;

        let output = !isNaN(phone) && (publicAndPagingNetwork || publicNetwork);
        return output;
    };

    return (
        <form onSubmit={register} className="home-content justify-center">
            <TextInput
                label={t('home-input-placeholder-email')}
                id={'email'}
                isValid={isEmailValid}
                onChange={(e) => setEmail(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            />

            <TextInput
                label={t('home-input-placeholder-password')}
                id={'pwd'}
                type="password"
                isValid={isPwdValid}
                onChange={(e) => setPwd(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            />

            <TextInput
                label={t('home-input-placeholder-repeat-password')}
                id={'pwdRepeat'}
                type="password"
                isValid={isPwdRepeatValid}
                onChange={(e) => setPwdRepeat(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            />

            <TextInput
                label={t('home-input-placeholder-phone')}
                id={'phone'}
                type="text"
                isValid={isPhoneValid}
                onChange={(e) => setPhone(e.target.value)}
                additionalLabelClasses={'min-w-32'}
            />

            <span className={errorMessage ? 'err-msg opacity-100' : 'err-msg opacity-0'}>
                {errorMessage ? t(errorMessage) : ''}
            </span>

            <SubmitButton
                parentDivClasses={'min-h-[4rem]'}
                isDisabled={disabled}
                isLoading={isLoading}
                buttonLabel={t('home-button-register')}
            />

            <div className="home-register-hint">
                <p>{t('home-register-password-requirements-text')}</p>
                <ul className="home-register-list">
                    <li>{t('home-register-requirement-lowercase-letter')}</li>
                    <li>{t('home-register-requirement-uppercase-letter')}</li>
                    <li>{t('home-register-requirement-number')}</li>
                    <li>{t('home-register-requirement-special-character')}</li>
                </ul>
            </div>
        </form>
    );
}

export default Register;
