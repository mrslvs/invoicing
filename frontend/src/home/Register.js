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

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('usermail');
    const pwdInput = document.getElementById('pwd');
    const repeatPwdInput = document.getElementById('pwd_repeat');

    const handleValidInputStyling = (isValid, el) => {
        if (isValid) {
            el.classList.add('valid-input');
        } else {
            if (el.classList.contains('valid-input')) {
                el.classList.remove('valid-input');
            }
        }
    };

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
        handleValidInputStyling(result, document.getElementById('username'));
    }, [user]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(mail);
        setValidMail(result);
        handleValidInputStyling(result, document.getElementById('usermail'));
    }, [mail]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        handleValidInputStyling(result, document.getElementById('pwd'));
    }, [pwd]);

    useEffect(() => {
        // compare passwords
        if (pwd && repeatPwd && repeatPwd === pwd) {
            setValidRepeatPwd(true);
            handleValidInputStyling(true, document.getElementById('pwd_repeat'));
        } else {
            setValidRepeatPwd(false);
            handleValidInputStyling(false, document.getElementById('pwd_repeat'));
        }
    }, [repeatPwd, pwd]);

    useEffect(() => {
        // validate form
        const tmp = validUser && validMail && validPwd && validRepeatPwd;
        setValidForm(tmp);

        if (tmp) {
            document.querySelector('.submit-btn').classList.add('valid-submit');
        } else {
            if (document.querySelector('.submit-btn').classList.contains('valid-submit')) {
                document.querySelector('.submit-btn').classList.remove('valid-submit');
            }
        }
    }, [validUser, validMail, validPwd, validRepeatPwd]);

    useEffect(() => {
        let errContainer = document.querySelector('.error-message');
        if (errorMessage) {
            if (errContainer.classList.contains('fadeInOut')) {
                setTimeout(() => {
                    errContainer.classList.remove('fadeInOut');
                }, 4000);
            } else {
                errContainer.classList.add('fadeInOut');
                setTimeout(() => {
                    setErrorMessage('');
                    document.querySelector('.error-message').classList.remove('fadeInOut');
                }, 4050);
            }
        }

        // if (errorMessage) {
        //     if (document.querySelector('.error-message').classList.contains('fadeInOut')) {
        //         // if error message is already being displayed, wait additional 4 seconds to remove it
        //         setTimeout(() => {
        //             setErrorMessage('');
        //         }, 4000);
        //     } else {
        //         document.querySelector('.error-message').classList.toggle('fadeInOut');

        //         setTimeout(() => {
        //             document.querySelector('.error-message').classList.toggle('fadeInOut');
        //             setErrorMessage('');
        //         }, 4000);
        //     }
        // }
    }, [errorMessage]);

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
            if (err.code === 'ERR_NETWORK') {
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
            <div className="form-item">
                <label htmlFor="username">Username</label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    required
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>

            {validUser ? (
                <p className="hint"></p>
            ) : (
                <p className="hint">
                    Username must contain 3-23 characters/numbers and start with a letter
                </p>
            )}

            <div className="marbot"></div>

            <div className="form-item">
                <label htmlFor="usermail">Email</label>

                <input
                    type="text"
                    id="usermail"
                    name="usermail"
                    autoComplete="off"
                    required
                    onChange={(e) => setMail(e.target.value)}
                />
            </div>
            {/* as hints take 1rem of height, add this for symetrical form */}
            <p className="hint"></p>

            <div className="marbot"></div>

            <div className="form-item">
                <label htmlFor="pwd">Password</label>

                <input
                    type="password"
                    id="pwd"
                    name="pwd"
                    autoComplete="off"
                    required
                    onChange={(e) => setPwd(e.target.value)}
                />
            </div>

            {validPwd ? (
                <p className="hint"></p>
            ) : (
                <p className="hint">
                    Password must be at least 8 chars long, contain special char, number and a
                    capital letter
                </p>
            )}

            <div className="marbot"></div>

            <div className="form-item">
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
            </div>

            {validRepeatPwd ? (
                <p className="hint"></p>
            ) : (
                <p className="hint">Passwords must match</p>
            )}

            <div className="marbot"></div>

            <input type="submit" className="submit-btn" disabled={!validForm} />

            <p className="error-message">{errorMessage}</p>
        </form>
    );
};

export default Register;
