import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import AuthContext from '../../context/AuthProvider';

function Register() {
    const { user, setUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [pwd, setPwd] = useState('');
    const [isPwdValid, setIsPwdValid] = useState(false);

    const [pwdRepeat, setPwdRepeat] = useState('');
    const [isPwdRepeatValid, setIsPwdRepeatValid] = useState(false);

    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setIsEmailValid(emailRegex.test(email));
    }, [email]);

    useEffect(() => {
        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.{12,}).*$/;
        setIsPwdValid(pwdRegex.test(pwd));
    }, [pwd]);

    useEffect(() => {
        setIsPwdRepeatValid(pwdRepeat === pwd);
    }, [pwdRepeat]);

    useEffect(() => {
        setIsPhoneValid(isPhoneValidSlovakia(phone));
    }, [phone]);

    const register = async (e) => {
        e.preventDefault();

        const registerData = {
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
            phone: document.getElementById('phone').value,
        };

        try {
            const response = await axiosInstance.post('/auth/register', registerData, {
                withCredentials: true,
            });

            // console.log(`Logged in before:${user}`)
            // setUser('lumos')
            // // this.forceUpdate()
            // console.log(`Logged in after:${user}`)
            // // window.location.reload(true)

            console.log('registered successfully');
        } catch (err) {
            console.log('there has been an error at register:');
            console.log(err.response.status + ': ' + err.response.data);
        }
    };

    const isPhoneValidSlovakia = (phone) => {
        let publicAndPagingNetwork = phone >= 901000000 && phone <= 919999999;
        let publicNetwork = phone >= 940000000 && phone <= 959999999;

        let output = !isNaN(phone) && (publicAndPagingNetwork || publicNetwork);
        return output;
    };

    return (
        <form onSubmit={register} className="home-content">
            <div className="home-input-container">
                <label htmlFor="email" className="home-input-label">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    // required
                    onChange={(e) => setEmail(e.target.value)}
                    className="home-input"
                />
            </div>

            <div className="home-input-container">
                <label htmlFor="pwd" className="home-input-label">
                    Password
                </label>
                <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    autoComplete="off"
                    required
                    onChange={(e) => setPwd(e.target.value)}
                    className="home-input"
                />
            </div>

            <div className="home-input-container">
                <label htmlFor="pwdRepeat" className="home-input-label">
                    Repeat password
                </label>
                <input
                    type="password"
                    name="pwdRepeat"
                    id="pwdRepeat"
                    autoComplete="off"
                    required
                    onChange={(e) => setPwdRepeat(e.target.value)}
                    className="home-input"
                />
            </div>

            <div className="home-input-container">
                <label
                    htmlFor="phone"
                    className="home-input-label"
                    style={{ color: isPhoneValid ? 'green' : 'red' }}
                >
                    Phone
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    className="home-input"
                />
            </div>

            <input
                type="submit"
                // disabled={!(isEmailValid && isPwdValid && isPwdRepeatValid && isPhoneValid)}
                className="home-submit home-animated-hover"
                value={'Register'}
            />

            <div id="hint">
                <p>
                    Password needs to be at least 12 characters long and must include all of the
                    following:
                </p>
                <ul>
                    <li>lowercase letter</li>
                    <li>uppercase letter</li>
                    <li>number</li>
                    <li>special character</li>
                </ul>
            </div>
        </form>
    );
}

export default Register;
