import React from 'react'

const Header = ({ setSelection }) => {
    return (
        <header>
            <button
                onClick={(e) => {
                    setSelection(e.target.value)
                }}
                value="login"
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value)
                }}
                value="about"
            >
                About
            </button>
            <button
                onClick={(e) => {
                    setSelection(e.target.value)
                }}
                value="register"
            >
                Register
            </button>
        </header>
    )
}

export default Header
