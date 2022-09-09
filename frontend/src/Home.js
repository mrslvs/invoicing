import { React, useState, useEffect } from 'react';
import './css/Home.css';
import Header from './Header';
import Content from './Content';

const Home = () => {
    const [selection, setSelection] = useState();

    return (
        <main>
            <div className="contentBox">
                <Header setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
};

export default Home;
