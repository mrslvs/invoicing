import { useNavigate } from 'react-router-dom';
import './Assets/Styles/App.css';
import useAuth from './hooks/useAuth';
import useAxiosAPI from './hooks/useAxiosAPI';
import useRefreshToken from './hooks/useRefreshToken';
import Header from './Components/app/Header';

function App() {
    const { auth } = useAuth();
    const refresh = useRefreshToken();
    const axiosAPI = useAxiosAPI();
    const navigate = useNavigate();

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
        <main className="App">
            <div className="app-box">
                <Header />
                <button onClick={() => getInvoices()}>Get Invoices</button>
            </div>
        </main>
    );
}

export default App;
