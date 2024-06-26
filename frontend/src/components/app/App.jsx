import { useEffect } from 'react';
import Header from './header/Header';
import useAuth from '../../hooks/useAuth';
import Dashboard from './dashboard/Dashboard';
import UserSetUp from './userSetUp/UserSetUp';
import '../../assets/styles/app/app.css';

function App() {
    const { user, setUser } = useAuth();
    useEffect(() => {
        console.log('app:');
        console.log(user.role);
    }, []);

    return (
        <div className="app-parent-div">
            <Header />
            {user.role ? <Dashboard /> : <UserSetUp />}
        </div>
    );
}

export default App;
