import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        console.log('gonna call axios.get /refresh');
        const res = await axios.get('/refresh', { withCredentials: true });
        console.log('CALLED axios.get /refresh, this is response:');
        console.log(res);

        const newAccessToken = res.data.accessToken;
        setAuth((prev) => {
            console.log('old AT: ' + prev.accessToken);
            console.log('new AT: ' + newAccessToken);
            return { ...prev, accessToken: newAccessToken };
        });
    };

    return refresh;
};

export default useRefreshToken;
