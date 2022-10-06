import { React, useState, useEffect } from 'react';
import '../css/Register.css';
import axios from '../api/axios';
// import axios from 'axios';

const Register = () => {
    // https://youtu.be/brcHK3P6ChQ
    //must start lower or upercase letter, then char or number or - or _
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

    // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Min 8 chars, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character:
    // (https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [repeatPwd, setRepeatPwd] = useState('');
    const [validRepeatPwd, setValidRepeatPwd] = useState(false);

    const [validForm, setValidForm] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(mail);
        setValidMail(result);
    }, [mail]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(pwd + ' = ' + result);
        setValidPwd(result);
    }, [pwd]);

    useEffect(() => {
        // compare passwords
        if (pwd && repeatPwd && repeatPwd === pwd) {
            setValidRepeatPwd(true);
            console.log('passwords match');
        } else {
            setValidRepeatPwd(false);
        }
    }, [repeatPwd, pwd]);

    useEffect(() => {
        // validate form
        const tmp = validUser && validMail && validPwd && validRepeatPwd;
        setValidForm(tmp);
    }, [validUser, validMail, validPwd, validRepeatPwd]);

    useEffect(() => {
        setTimeout(() => {}, 2000);
    }, [errorMessage]);

    const displayErrorMessage = () => {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validForm) {
            setErrorMessage('Form is not valid');
        }

        // send POST request
        const formData = new FormData(document.querySelector('.register-form'));

        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        try {
            const res = await axios.post('/auth/register', body);
            console.log(res.data);
        } catch (err) {
            if (!err.response) {
                console.log('No server response');
                setErrorMessage('No server response');
            } else if (err.response.status === 409) {
                console.log('Username is taken');
                setErrorMessage('Username is taken');
            } else {
                console.log('reg failed message');
                setErrorMessage('Registration failed');
            }
        }
    };

    return (
        <form className="Content register-form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username</label>

            <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                required
                onChange={(e) => setUser(e.target.value)}
            />

            {validUser ? (
                <p>Valid</p>
            ) : (
                <p className="hint">
                    Username must contain 3-23 characters/numbers and start with a letter
                </p>
            )}

            <label htmlFor="usermail">Email</label>

            <input
                type="text"
                id="usermail"
                name="usermail"
                autoComplete="off"
                required
                onChange={(e) => setMail(e.target.value)}
            />

            <label htmlFor="pwd">Password</label>

            <input
                type="password"
                id="pwd"
                name="pwd"
                autoComplete="off"
                required
                onChange={(e) => setPwd(e.target.value)}
            />

            <label htmlFor="pwd_repeat">Repeat password</label>

            <input
                type="password"
                id="pwd_repeat"
                name="pwd_repeat"
                autoComplete="off"
                required
                readOnly={validPwd ? false : true}
                placeholder={validPwd ? '' : 'Enter valid password first'}
                onChange={(e) => setRepeatPwd(e.target.value)}
            />

            <input type="submit" disabled={!validForm} />
        </form>
    );
};

export default Register;
