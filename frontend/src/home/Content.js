import About from './About';
import Login from './Login';
import Register from './Register';
import React from 'react';

const Content = ({ selection }) => {
    let contentComponent = <About />;

    switch (selection) {
        case 'login':
            contentComponent = <Login />;
            break;
        case 'about':
            contentComponent = <About />;
            break;
        case 'register':
            contentComponent = <Register />;
            break;
    }

    return contentComponent;
};

export default Content;
