// import axios from '../api/axios';
import { axiosAPI } from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        console.log('refreshToken hook: requesting new AT');
        const res = await axiosAPI.get('/auth/refresh', { withCredentials: true });
        const newAccessToken = res.data.accessToken;
        console.log('refreshToken hook: response from server, received new AT: ' + newAccessToken);

        setAuth((prev) => {
            console.log(
                'refreshToken hook: UPDATING AT from: ' +
                    prev.accessToken +
                    ' to: ' +
                    newAccessToken
            );
            return { ...prev, accessToken: newAccessToken }; // overwrite accessToken
        });
    };

    return refresh;
};

export default useRefreshToken;
