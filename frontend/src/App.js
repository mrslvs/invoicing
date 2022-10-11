import './css/App.css';
import useAuth from './hooks/useAuth';
import axios from './api/axios';
import useRefreshToken from './hooks/useRefreshToken';

function App() {
    const { auth } = useAuth();
    const refresh = useRefreshToken();

    const callAPI = async () => {
        try {
            console.log('trying to contact server');
            const res = await axios.get('/app', { withCredentials: true });
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
