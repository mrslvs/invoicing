import { useEffect } from 'react';
import Header from './app/Header';
import useAuth from '../hooks/useAuth';
import Dashboard from './app/Dashboard';
import RoleSelection from './app/UserSetUp';
import '../assets/styles/app/app.css';

function App() {
    const { user, setUser } = useAuth();
    useEffect(() => {
        console.log('app:');
        console.log(user.role);
    }, []);

    return (
        <div className="app-parent-div">
            <Header />
            {user.role ? <Dashboard /> : <RoleSelection />}
        </div>
    );
}

export default App;
