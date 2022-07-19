import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CursorManager } from './context/cursorContext'

// pages
import Home from './pages/index'
import About from './pages/about'

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
]

const App = () => {

    const location = useLocation()

    return (
        <CursorManager>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    {routes.map(({ path, name, Component }) => (
                        <Route
                            key={name}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Routes>
            </AnimatePresence>
        </CursorManager>
    );
}

export default App;
