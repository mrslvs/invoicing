import React, { createContext, useState } from 'react'

const ActiveComponentContext = createContext()

export const ActiveComponentProvider = ({ children }) => {
    const [activeComponent, setActiveComponent] = useState('dashboard')

    return (
        <ActiveComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
            {children}
        </ActiveComponentContext.Provider>
    )
}

export default ActiveComponentContext
