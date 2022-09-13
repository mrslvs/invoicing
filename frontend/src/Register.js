import React from 'react';

const Register = () => {
    return (
        <form action="/register" method="POST" className="Content">
            <label htmlFor="username">Username</label>
            <input type="text" />
            <label htmlFor="pwd">Password</label>
            <input type="password" />
        </form>
    );
};

export default Register;
