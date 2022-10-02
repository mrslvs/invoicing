import { React, useState, useEffect } from 'react';
import '../css/Register.css';
import axios from 'axios';

const Register = () => {
    // https://youtu.be/brcHK3P6ChQ
    //must start lower or upercase letter, then char or number or - or _
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    // Min 8 chars, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character:
    // (https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [repeatPwd, setRepeatPwd] = useState('');
    const [validRepeatPwd, setValidRepeatPwd] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(pwd + ' = ' + result);
        setValidPwd(result);
    }, [pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const api_endpoint = 'http://localhost:9000/auth/register';

        // send POST request
        const body = {};
        const formData = new FormData(document.querySelector('.register-form'));

        formData.forEach((val, key) => {
            body[key] = val;
            console.log(key + '=' + val);
        });

        console.log(body);
        const res = await axios.post(api_endpoint, body);

        console.log(res);
    };

    return (
        <form
            // id="register-form"
            action="/auth/register"
            method="POST"
            className="Content register-form"
            onSubmit={(e) => handleSubmit(e)}
        >
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
                    Username must contain 3-23 characters/numbers and start with letter
                </p>
            )}

            <label htmlFor="pwd">Password</label>

            <input
                type="password"
                id="pwd"
                name="pwd"
                autoComplete="off"
                required
                onChange={(e) => setPwd(e.target.value)}
            />

            <label htmlFor="pwd-repeat">Repeat password</label>

            <input
                type="password"
                id="pwd-repeat"
                name="pwd-repeat"
                autoComplete="off"
                required
                readOnly={validPwd ? false : true}
                placeholder={validPwd ? '' : 'Enter valid password first'}
                onChange={(e) => setValidRepeatPwd(e.target.value)}
            />

            <input type="submit" />
        </form>
    );
};

export default Register;
