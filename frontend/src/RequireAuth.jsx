import React, { useEffect, useState } from 'react'
import useAuth from './hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import axiosInstance from './api/axiosInstance'

function RequireAuth() {
    const { user, setUser } = useAuth()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function isSession() {
            try {
                const response = await axiosInstance.get('/app', {
                    withCredentials: true,
                })

                setUser({ user: response.data.userId, isLoggedIn: true })
                setIsLoading(false)
            } catch (error) {
                console.log('HANDLE ERROR RequireAuth.jsx -> 401 unauthorized')
                setIsLoading(false)
            }
        }

        isSession()
    }, [])

    if (isLoading === false) {
        return user.isLoggedIn ? <Outlet /> : <Navigate to="/" />
    }
}

export default RequireAuth
