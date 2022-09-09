import React from 'react';
import About from './About';
import Login from './Login';
import Register from './Register';

const Content = ({ selection }) => {
    let contentComponent = <About />;

    switch (selection) {
        case 'about':
            console.log('set about');
            contentComponent = <About />;
            break;
        case 'login':
            console.log('set login');
            contentComponent = <Login />;
            break;
        case 'register':
            console.log('set register');
            contentComponent = <Register />;
            break;
    }

    return contentComponent;
};

export default Content;
