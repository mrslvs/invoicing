import { useNavigate } from 'react-router-dom';
import useAxiosAPI from '../hooks/useAxiosAPI';

const Header = () => {
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
        <header className="app-header">
            <button onClick={(e) => getInvoices()}>Invoices</button>
        </header>
    );
};

export default Header;
