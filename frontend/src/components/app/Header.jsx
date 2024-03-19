import React from 'react'
import User from './header/User'

const Header = () => {
    return (
        <div>
            <h3>header</h3>
            <nav>
                <p>fake nav 1</p>
                <p>fake nav 2</p>
                <p>fake nav 3</p>
            </nav>

            <User />
        </div>
    )
}

export default Header
