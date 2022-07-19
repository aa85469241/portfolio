import { useState, createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CursorContext = createContext()

export const CursorManager = ({ children }) => {

    const [cursorType, setCursorType] = useState('')
    const location = useLocation()

    useEffect(() => {
        setCursorType('')
    }, [location])

    return (
        <CursorContext.Provider value={{
            cursorType,
            setCursorType
        }}>
            {children}
        </CursorContext.Provider>
    )
}

export const useCursor = () => useContext(CursorContext)
