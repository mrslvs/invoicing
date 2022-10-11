import './css/App.css';
import useAuth from './hooks/useAuth';
// import axios from './api/axios';
import useAxiosAPI from './hooks/useAxiosAPI';
import useRefreshToken from './hooks/useRefreshToken';

function App() {
    const { auth } = useAuth();
    const refresh = useRefreshToken();
    const axiosAPI = useAxiosAPI();

    const callAPI = async () => {
        try {
            console.log('trying to contact server');
            const res = await axiosAPI.get('/app', { withCredentials: true });
            console.log(res);
        } catch (err) {
            console.log('mame err');
            console.log(err);
        }
    };

    return (
        <div className="App">
            <h1>Welcome to app {auth.username}</h1>
            <button onClick={() => callAPI()}>Use API</button>
            <button onClick={() => refresh()}>Refresh</button>
        </div>
    );
}

export default App;
