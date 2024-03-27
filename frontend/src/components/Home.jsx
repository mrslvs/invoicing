import { useEffect, useState } from 'react';
import Content from './home/Content';
import Header from './home/Header';
import backgroundImage from '../assets/images/background_landscape.jpg';
import '../assets/styles/home/home.css';

function Home() {
    const [selection, setSelection] = useState('Login');

    return (
        <main className="home-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="home-box">
                <Header selection={selection} setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
}

export default Home;
