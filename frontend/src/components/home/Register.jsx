import { useContext, useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import '../../assets/styles/home/register.css';
import TextInput from './TextInput';

function Register() {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [pwd, setPwd] = useState('');
    const [isPwdValid, setIsPwdValid] = useState(false);

    const [pwdRepeat, setPwdRepeat] = useState('');
    const [isPwdRepeatValid, setIsPwdRepeatValid] = useState(false);

    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

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
            console.log('there has been an error at register:');
            console.log(err.response.status + ': ' + err.response.data);
        }
    };

    const isPhoneValidSlovakia = (phone) => {
        let publicAndPagingNetwork = phone >= 901000000 && phone <= 919999999;
        let publicNetwork = phone >= 940000000 && phone <= 959999999;

        let output = !isNaN(phone) && (publicAndPagingNetwork || publicNetwork);
        return output;
    };

    return (
        <form onSubmit={register} className="home-content home-content-register">
            <TextInput
                label={'Email'}
                id={'email'}
                isValid={isEmailValid}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                label={'Password'}
                id={'pwd'}
                type="password"
                isValid={isPwdValid}
                onChange={(e) => setPwd(e.target.value)}
            />

            <TextInput
                label={'Repeat password'}
                id={'pwdRepeat'}
                type="password"
                isValid={isPwdRepeatValid}
                onChange={(e) => setPwdRepeat(e.target.value)}
            />

            <TextInput
                label={'Phone'}
                id={'phone'}
                type="text"
                isValid={isPhoneValid}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                type="submit"
                disabled={disabled}
                className={
                    disabled ? 'home-register-submit-disabled' : 'home-submit home-animated-hover'
                }
                value={'Register'}
            />

            <div className="home-register-hint">
                <p>
                    Password needs to be at least 12 characters long and must include all of the
                    following:
                </p>
                <ul className="home-register-list">
                    <li>Lowercase letter</li>
                    <li>Uppercase letter</li>
                    <li>Number</li>
                    <li>Special character</li>
                </ul>
            </div>
        </form>
    );
}

export default Register;
