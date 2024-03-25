import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home/login.css';

function Login() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
    }, [user]);

    const login = async (e) => {
        e.preventDefault();

        const loginData = {
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
        };

        try {
            const response = await axiosInstance.post('/auth/login', loginData, {
                withCredentials: true,
            });

            console.log('log login:');
            console.log(response.data.userId);
            console.log(response.data.role);
            setUser({ user: response.data.userId, isLoggedIn: true, role: response.data.role });
            setTimeout(() => {
                navigate('/app');
            }, 4000);
        } catch (err) {
            console.log('There has been an error at login:');
            console.log(err);
        }
    };

    return (
        <form onSubmit={login} className="home-content home-content-login">
            <div className="home-input-container">
                <label htmlFor="email" className="home-input-label">
                    Email
                </label>
                <input type="text" name="email" id="email" className="home-input" />
            </div>
            <div className="home-input-container">
                <label htmlFor="pwd" className="home-input-label">
                    Password
                </label>
                <input type="text" name="pwd" id="pwd" className="home-input" />
            </div>

            <input type="submit" className="home-submit home-animated-hover" value={'Log In'} />
        </form>
    );
}

export default Login;
