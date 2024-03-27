import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

function Login() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(user);
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

            setUser({ user: response.data.userId, isLoggedIn: true, role: response.data.role });
            setTimeout(() => {
                navigate('/app');
            }, 4000);
        } catch (err) {
            console.log('There has been an error at login:');
        }
    };

    return (
        <form onSubmit={login} className="home-content justify-center">
            <TextInput label="Email" id="email" />
            <TextInput label="Password" id="pwd" />
            <input type="submit" className="home-submit home-animated-hover" value={'Log In'} />
        </form>
    );
}

export default Login;
