// components
import Header from './home/Header';
import Content from './home/Content';
// CSS
import './css/Home.css';
// import './css/Header.css';
// lib
import { React, useState, useEffect } from 'react';

const Home = () => {
    const [selection, setSelection] = useState('login');

    return (
        <main className="home-main">
            <div className="content-box">
                <Header setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
};

export default Home;
