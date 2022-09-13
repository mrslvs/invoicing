import React from 'react';

const Register = () => {
    return (
        <form action="/register" method="POST" className="Content">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="pwd">Password</label>
            <input type="password" id="pwd" />

            <label htmlFor="pwd-repeat">Repeat password</label>
            <input type="password" id="pwd-repeat" />
        </form>
    );
};

export default Register;
