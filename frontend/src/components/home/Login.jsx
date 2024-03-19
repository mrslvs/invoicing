import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
    }, [user])

    const login = async (e) => {
        e.preventDefault()

        const loginData = {
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
        }

        try {
            const response = await axiosInstance.post('/auth/login', loginData, {
                withCredentials: true,
            })

            setUser({ user: 'testUser', isLoggedIn: true })
            navigate('/app')
        } catch (err) {
            console.log('There has been an error at login:')
        }
    }

    return (
        <form onSubmit={login}>
            <div className="input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="input">
                <label htmlFor="pwd">Password</label>
                <input type="text" name="pwd" id="pwd" />
            </div>

            <input type="submit" />
        </form>
    )
}

export default Login
