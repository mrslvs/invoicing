import React from 'react';

const Register = () => {
    return (
        <div>
            <form action="/register" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" />
                <label htmlFor="pwd">Password</label>
                <input type="password" />
            </form>
        </div>
    );
};

export default Register;
