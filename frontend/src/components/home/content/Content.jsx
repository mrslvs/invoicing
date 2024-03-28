import React from 'react';
import About from './About';
import Register from './Register';
import Login from './Login';

const Content = ({ selection }) => {
    let contentComponent = <Login />;

    switch (selection) {
        case 'About':
            contentComponent = <About />;
            break;
        case 'Register':
            contentComponent = <Register />;
            break;
        case 'Login':
            contentComponent = <Login />;
            break;
    }

    return contentComponent;
};

export default Content;
