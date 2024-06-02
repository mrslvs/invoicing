// import React, { useState } from 'react';
// import User from './User';
// import { FaUserGroup } from 'react-icons/fa6';
import '../../../assets/styles/app/header.css'

// const Header = () => {
//     const [showUser, setShowUser] = useState(false);

//     const handleShowUserMenu = () => {
//         setShowUser(!showUser);
//         // console.log('show user menu');
//     };

//     return (
//         <header className="app-header">
//             <h3 className="app-header-logo">NameNameN</h3>
//             <nav className="app-header-nav">
//                 <button onClick={handleShowUserMenu}>
//                     <FaUserGroup />
//                 </button>

//                 {showUser ? <User /> : null}
//             </nav>
//         </header>
//     );
// };

// export default Header;
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import useTranslation from '../../../hooks/useTranslation'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import axiosInstance from '../../../api/axiosInstance'
import { FaCircleUser } from 'react-icons/fa6'

const pages = ['app-header-invoices', 'app-header-customers', 'app-header-suppliers']
const settings = ['app-header-profile', 'app-header-logout']

function ResponsiveAppBar() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { user, setUser } = useAuth()

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const logout = async () => {
        if (user.isLoggedIn) {
            try {
                const response = await axiosInstance.post('/auth/logout', {
                    withCredentials: true,
                })
            } catch (err) {
                console.log('error in logout')
                console.log(err)
            }
            setUser({ user: '', isLoggedIn: false })
            navigate('/')
        }
    }

    const handleUserMenuClick = (setting) => {
        handleCloseUserMenu()

        switch (setting) {
            case 'account':
                break
            case 'logout':
                logout()
                break
            default:
                null
                break
        }
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="logo"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'Dancing Script',
                            // fontWeight: 700,
                            // color: 'inherit',
                            // fontSize: '2rem',
                        }}
                    >
                        NameNameN
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" variant="text">
                                        {t(page)}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {t(page)}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={t('app-header-user-settings')}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <div className="border-2 rounded-md p-1">
                                    <FaCircleUser className="h-[1.5rem] w-[1.5rem] text-secondaryTextWhite " />
                                </div>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => handleUserMenuClick(setting)}
                                >
                                    <Typography textAlign="center" variant="text">
                                        {t(setting)}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
