import React from 'react';
import axiosInstance from '../../api/axiosInstance';

const Dashboard = () => {
    const getData = async () => {
        try {
            const data = await axiosInstance.get('/app', { withCredentials: 'true' });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <main>
            <h1>Dashboard</h1>
            <p>This is dashboard when an user has his role</p>
            <button onClick={getData}>Press to get data from server</button>
        </main>
    );
};

export default Dashboard;
