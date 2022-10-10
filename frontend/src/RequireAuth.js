import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const RequireAuth = () => {
    const { auth } = useAuth();

    // return auth?.accessToken ? <Outlet /> : <Navigate to="/" />;
    if (auth?.accessToken) {
        console.log('access token is set');
        return <Outlet />;
    } else {
        console.log('accessToken is not set, accessToken:');
        console.log(auth);
        return <Navigate to="/" />;
    }
};

export default RequireAuth;
