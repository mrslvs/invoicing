import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../API/axios';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
    }, [errorMessage]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // send POST request
        const formData = new FormData(document.querySelector('.login-form'));

        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        try {
            const res = await axios.post('/auth/login', body, { withCredentials: true });

            const accessToken = res.data.accessToken;

            setAuth({ ...body, accessToken });

            navigate('/app');
        } catch (err) {
            console.log(err);
            if (err.code === 'ERR_NETWORK') {
                setErrorMessage('No server response');
            } else if (err.response.status === 400) {
                setErrorMessage(err.response.data);
            } else {
                setErrorMessage(err.response.data);
            }
        }
    };

    return (
        <form className="Content login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-item">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete="off" />
            </div>
            <div className="marbot"></div>

            <div className="form-item">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" autoComplete="off" />
            </div>
            <div className="marbot"></div>

            <input type="submit" className="submit-btn" />

            <p className="error-message">{errorMessage}</p>
        </form>
    );
};

export default Login;
