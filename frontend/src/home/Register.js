import { React, useState, useEffect } from 'react';

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

    return (
        <form action="/register" method="POST" className="Content">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                required
                onChange={(e) => setUser(e.target.value)}
            />
            {validUser ? (
                <p>Valid</p>
            ) : (
                <p className="hint">
                    Username must contain 3-23 character and start with lowercase letter
                </p>
            )}

            <label htmlFor="pwd">Password</label>
            <input
                type="password"
                id="pwd"
                autoComplete="off"
                required
                onChange={(e) => setPwd(e.target.value)}
            />

            <label htmlFor="pwd-repeat">Repeat password</label>
            <input
                type="password"
                id="pwd-repeat"
                autoComplete="off"
                required
                readOnly={validPwd ? false : true}
                placeholder={validPwd ? '' : 'Enter valid password first'}
                onChange={(e) => setValidRepeatPwd(e.target.value)}
            />
        </form>
    );
};

export default Register;
