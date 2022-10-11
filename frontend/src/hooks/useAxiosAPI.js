import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
const { axiosAPI } = require('../api/axios');

const useAxiosAPI = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosAPI.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosAPI.interceptors.response.use(
            //if response is good, return it
            (response) => response,
            async (error) => {
                // if access token expired
                const prevRequest = error?.config; // get previous request

                if (error.response.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true; // custom flag to not end up in a loop of errors
                    const newAccessToken = await refresh(); // get new AT
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; // assign new AT to the request
                    return axiosAPI(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            // clean up function so the interceptors do not pile up
            axiosAPI.interceptors.response.eject(requestIntercept);
            axiosAPI.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refresh]);

    return axiosAPI;
};

export default useAxiosAPI;
