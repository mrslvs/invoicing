import { useEffect, useState } from 'react';
import Content from './home/Content';
import Header from './home/Header';

function Home() {
    const [selection, setSelection] = useState('login');

    return (
        <main className="home-main">
            <div className="content-box">
                <Header setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
}

export default Home;
