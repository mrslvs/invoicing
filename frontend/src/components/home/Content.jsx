import React from 'react'
import About from './About'
import Register from './Register'
import Login from './Login'

const Content = ({ selection }) => {
    let contentComponent = <Login />

    switch (selection) {
        case 'about':
            contentComponent = <About />
            break
        case 'register':
            contentComponent = <Register />
            break
        case 'login':
            contentComponent = <Login />
            break
    }

    return contentComponent
}

export default Content
