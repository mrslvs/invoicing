import React from 'react';
import '../css/Login.css';
import axios from '../api/axios';

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // send POST request
        const formData = new FormData(document.querySelector('.login-form'));

        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
            console.log(key + '=' + val);
        });

        try {
            const res = await axios.post('/auth/login', body);
        } catch (err) {
            console.log('mame err');
            console.log(err.code);
            if (err.code === 'ERR_NETWORK') {
                console.log('no server response');
            }
        }

        // console.log(res);
    };
    return (
        <form className="Content login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-item">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>

            <div className="form-item">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" />
            </div>

            <input type="submit" />
        </form>
    );
};

export default Login;
