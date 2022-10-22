import Header from './Components/home/Header';
import Content from './Components/home/Content';
import './Assets/Styles/Home.css';
import { React, useState } from 'react';

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
