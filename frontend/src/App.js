import { useNavigate } from 'react-router-dom';
import './css/App.css';
import useAuth from './hooks/useAuth';
import useAxiosAPI from './hooks/useAxiosAPI';
import useRefreshToken from './hooks/useRefreshToken';
import Header from './app/Header';

function App() {
    const { auth } = useAuth();
    const refresh = useRefreshToken();
    const axiosAPI = useAxiosAPI();
    const navigate = useNavigate();

    const callAPI = async () => {
        try {
            const res = await axiosAPI.get('/app', { withCredentials: true });
            console.log(res);
        } catch (err) {
            console.log('axiosAPI request ERROR in callAPI()');
            if (err.response.status === 401) {
                navigate('/');
            }
            console.log(err);
        }
    };

    const getInvoices = async () => {
        try {
            const res = await axiosAPI.get('/invoice', { withCredentials: true });
            console.log(res);
        } catch (err) {
            console.log('axiosAPI request ERROR in getInvoices()');
            if (err.response.status === 401) {
                navigate('/');
            }
            console.log(err);
        }
    };

    return (
        // <div className="App">
        //     <h1>Welcome to app {auth.username}</h1>
        //     <button onClick={() => callAPI()}>Use API</button>
        //     <button onClick={() => refresh()}>Refresh</button>
        // </div>
        <main className="App">
            <div className="app-box">
                <Header />
                <button onClick={() => getInvoices()}>Get Invoices</button>
                {/* <Header setSelection={setSelection} />
                <Content selection={selection} /> */}
            </div>
        </main>
    );
}

export default App;
