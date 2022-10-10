import axios from '../api/axios';
import React, { useContext } from 'react';
// import AuthContext from '../context/AuthProvider';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    // const { auth, setAuth } = useContext(AuthContext);
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();

        // send POST request
        const formData = new FormData(document.querySelector('.login-form'));

        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
            // console.log(key + '=' + val);
        });

        try {
            const res = await axios.post('/auth/login', body, { withCredentials: true });

            const accessToken = res.data.accessToken;

            // const tmp = { ...body, accessToken };
            setAuth({ ...body, accessToken });

            navigate('/app');
        } catch (err) {
            console.log('mame err');
            console.log(err);
            console.log(err.code);
            if (err.code === 'ERR_NETWORK') {
                console.log('ERROR: no server response');
            } else if (err.response.status === 400) {
                console.log('ERROR: missing username or password');
            } else {
                console.log('ERROR: login failed');
            }
        }

        // console.log(res);
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
        </form>
    );
};

export default Login;
