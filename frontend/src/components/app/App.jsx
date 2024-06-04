import { useEffect, useState } from 'react'
import Header from './header/Header'
// import useAuth from '../../hooks/useAuth'
import Dashboard from './dashboard/Dashboard'
// import UserSetUp from './userSetUp/UserSetUp'
import '../../assets/styles/app/app.css'
import { ThemeProvider, createTheme } from '@mui/material'
import TwoFactorAuthAction from './actions/TwoFactorAuthAction'
// import ActiveComponentProvider from '../../context/ActiveComponentProvider'
import { useContext } from 'react'

import ActiveComponentContext from '../../context/ActiveComponentProvider'
// import ActiveComponentProvider from '../../context/ActiveComponentProvider'
// import {
//     ActiveComponentProvider,
//     ActiveComponentContext,
// } from '../../context/ActiveComponentProvider'

function App() {
    // const { user, setUser } = useAuth()
    const { activeComponent } = useContext(ActiveComponentContext)
    // const [activeComponent, setActiveComponent] = useState('dashboard')

    // useEffect(() => {
    //     console.log('app:')
    //     console.log(user.role)
    // }, [])

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

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'dashboard':
                // return <Dashboard setActiveComponent={setActiveComponent} />
                return <Dashboard />
            case 'app-action-2fa':
                return <TwoFactorAuthAction />
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="">
                <Header />
                {/* <ActiveComponentProvider>{renderActiveComponent()}</ActiveComponentProvider> */}
                {renderActiveComponent()}
                {/* {activeComponent && (
                    <switch>
                        <case value="dashboard">
                            <Dashboard />
                            break;
                        </case>
                        <case value="app-two-factor-authentication">
                            <TwoFactorAuthAction />
                            break;
                        </case>
                    </switch>
                )} */}
            </div>
        </ThemeProvider>
    )
}

export default App
