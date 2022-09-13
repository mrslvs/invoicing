import React from 'react';

const Login = () => {
    return (
        <form className="Content">
            <label htmlFor="username">Username</label>
            <input type="text" />
            <label htmlFor="pwd">Password</label>
            <input type="password" />
        </form>
    );
};

export default Login;
