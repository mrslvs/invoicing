import { useEffect, useState } from 'react'
import Content from './home/Content'
import Header from './home/Header'

function Home() {
    const [selection, setSelection] = useState('login')

    // useEffect(() => {
    //     console.log(`selection: ${selection}`)
    // }, [selection])

    return (
        <div>
            <Header setSelection={setSelection} />
            <Content selection={selection} />

            {/* <p>Mimic login - REMOVE AFTER</p> */}
            {/* <Link to="/dashboard">Dashboard</Link> */}
        </div>
    )
}

export default Home
