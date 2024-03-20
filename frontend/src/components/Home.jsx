import { useEffect, useState } from 'react';
import Content from './home/Content';
import Header from './home/Header';
import backgroundImage from '../assets/images/background_landscape.jpg';

function Home() {
    const [selection, setSelection] = useState('login');

    return (
        <main
            className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="home-box-container">
                <Header setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
}

export default Home;
