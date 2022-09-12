import React from 'react';
import About from './About';
import Login from './Login';
import Register from './Register';

const Content = ({ selection }) => {
    let contentComponent = <About />;

    switch (selection) {
        case 'about':
            contentComponent = <About />;
            break;
        case 'login':
            contentComponent = <Login />;
            break;
        case 'register':
            contentComponent = <Register />;
            break;
    }

    return contentComponent;
};

export default Content;
