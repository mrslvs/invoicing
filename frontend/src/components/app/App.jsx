import { useEffect } from 'react'
import Header from './header/Header'
import useAuth from '../../hooks/useAuth'
import Dashboard from './dashboard/Dashboard'
import UserSetUp from './userSetUp/UserSetUp'
import '../../assets/styles/app/app.css'
import TwoFactorAuth from './2FA/TwoFactorAuth'
import { ThemeProvider, createTheme } from '@mui/material'

function App() {
    const { user, setUser } = useAuth()
    useEffect(() => {
        console.log('app:')
        console.log(user.role)
    }, [])

    const theme = createTheme({
        palette: {
            primary: { main: '#24B2EB', dark: '#139cd2', light: '#8ad6f4' },
            secondary: { main: '#EB5D24', dark: '#a43a0f', light: '#f0865b' },
            secondaryTextWhite: '#EDEDED',
            primaryTextBlack: '#121212',
            darkBackground: '#556773',
        },
        typography: {
            logo: { fontFamily: 'Dancing Script', fontSize: '2rem', fontWeight: 700 },
            text: { fontFamily: 'Roboto', fontSize: '1rem' },
            kpi: { fontFamily: 'Roboto', fontSize: '3rem' },
            // fontFamily: ['"[Dancing Script]", "sans-serif"'],
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="app-parent-div">
                <Header />
                {/* {user.role ? <Dashboard /> : <UserSetUp />} */}
                {/* <TwoFactorAuth /> */}
                <Dashboard />
            </div>
        </ThemeProvider>
    )
}

export default App
