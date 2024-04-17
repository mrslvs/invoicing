import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

function Login() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const disabled = !(email && pwd);

    // useEffect(() => {
    //     // console.log(user);
    // }, [user]);

    const removeErrorMessageOnInputChange = () => {
        setErrorMessage('');
    };

    const handleInputChange = (c, isEmail) => {
        setErrorMessage('');
        isEmail ? setEmail(c) : setPwd(c);
        // isEmail ? console.log(email) : console.log(pwd);
    };

    const login = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const loginData = {
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
        };

        try {
            const response = await axiosInstance.post('/auth/login', loginData, {
                withCredentials: true,
            });

            setUser({ user: response.data.userId, isLoggedIn: true, role: response.data.role });
            navigate('/app');
        } catch (err) {
            const status = err.response?.status || 500;

            setIsLoading(false);
            status === 500 ? setErrorMessage('Server error') : setErrorMessage('Wrong credentials');
        }
    };

    return (
        <form onSubmit={login} className="home-content justify-center">
            <TextInput
                label="Email"
                id="email"
                // onChange={removeErrorMessageOnInputChange}
                onChange={(e) => handleInputChange(e.target.value, true)}
                additionalLabelClasses={'min-w-[5rem]'}
            />
            <TextInput
                label="Password"
                id="pwd"
                // onChange={removeErrorMessageOnInputChange}
                onChange={(e) => handleInputChange(e.target.value, false)}
                additionalLabelClasses={'min-w-[5rem]'}
            />
            <span className={errorMessage ? 'err-msg opacity-100' : 'err-msg opacity-0'}>
                {errorMessage ? errorMessage : ''}
            </span>
            <SubmitButton
                parentDivClasses={'min-h-[4rem]'}
                isLoading={isLoading}
                isDisabled={disabled}
                buttonLabel={'Log in'}
            />
        </form>
    );
}

export default Login;
