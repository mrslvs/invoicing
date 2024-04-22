import { useEffect, useState } from 'react';
import Content from './content/Content';
import Header from './header/Header';
import backgroundImage from '../../assets/images/background_landscape.jpg';
import '../../assets/styles/home/home.css';
import useTheme from '../../hooks/useTheme';

function Home() {
    const { isDark } = useTheme();
    const [selection, setSelection] = useState('Login');

    const baseClass = 'home-main ';

    return (
        <main
            className={isDark ? baseClass + 'dark' : baseClass}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="home-box dark:text-red-500 sm:border sm:border-red-500">
                <Header selection={selection} setSelection={setSelection} />
                <Content selection={selection} />
            </div>
        </main>
    );
}

export default Home;
