import { useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import Header from './app/Header';
import useAuth from '../hooks/useAuth';

function App() {
    const { user, setUser } = useAuth();
    useEffect(() => {
        console.log('app:');
        console.log(user);
    }, []);

    const getData3 = async () => {
        try {
            const data = await axiosInstance.get('/app', { withCredentials: 'true' });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Press to get data from server</p>
            <button onClick={getData3}>GET Server</button>
            <br></br>
            <Header />
            {/* {error ? <p>{error}</p> : isLodaing ? <p>Loading ...</p> : <p>{data}</p>} */}
        </div>
    );
}

export default App;
