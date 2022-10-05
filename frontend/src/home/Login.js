import React from 'react';
import axios from 'axios';

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const api_endpoint = 'http://localhost:9000/auth/login';

        // send POST request
        const body = {};
        const formData = new FormData(document.querySelector('.login-form'));

        formData.forEach((val, key) => {
            body[key] = val;
            console.log(key + '=' + val);
        });

        console.log(body);
        const res = await axios.post(api_endpoint, body);

        console.log(res);
    };
    return (
        <form className="Content login-form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" id="pwd" />
            <input type="submit" />
        </form>
    );
};

export default Login;
