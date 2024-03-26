import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

const User = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        if (user.isLoggedIn) {
            try {
                const response = await axiosInstance.post('/auth/logout', {
                    withCredentials: true,
                });
            } catch (err) {
                console.log('error in logout');
                console.log(err);
            }
            setUser({ user: '', isLoggedIn: false });
            navigate('/');
        }
    };

    return (
        <ul className="header-user-drop-down-menu">
            <li>{user.user}</li>
            <li>{user.role ? user.role : 'role not defined'}</li>
            <li>
                <button onClick={logout}>Logout</button>
            </li>
            {/* <p>user@email.com</p>
            <p>persona will be here</p> */}
        </ul>
    );
};

export default User;
