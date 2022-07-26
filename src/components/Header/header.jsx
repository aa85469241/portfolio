import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
//framer-motion
import { motion, useCycle } from 'framer-motion'
// styles
import { Container, Flex } from '../../styles/GlobalStyles'
import { HeaderNav, Logo, Menu } from './header.style'
// context
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/GlobalContext'
import { useCursor } from '../../context/cursorContext'
// components
import Navigation from './navigation/navigation'
import { AnimeTrigger } from '../../components'
import { headerVariants } from '../../variants'



export const Header = ({ delaySec }) => {
    // framer motion useCycle
    const [open, toggle] = useCycle(false, true)
    // context
    const { currentTheme } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()
    const { setCursorType } = useCursor()

    // router
    const navigate = useNavigate()
    const location = useLocation()
    const refreshPage = () => {
        if (location.pathname === '/') {
            window.location.assign(window.location.href)
        }
        else {
            navigate('/')
        }
    }

    const toggleTheme = () => {
        if (currentTheme === 'light') {
            dispatch({ type: "SWITCH_THEME", theme: 'dark' })
        }
        else {
            dispatch({ type: "SWITCH_THEME", theme: 'light' })
        }
    }

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme)
    }, [currentTheme])

    return (
        <>
            <HeaderNav>
                <Container>
                    <AnimeTrigger threshold='0.5' delay={delaySec ? delaySec : 11}>
                        <Flex justify='space-between'>
                            <Logo variants={headerVariants.fadeOut} transition={{ duration: .5 }}>
                                <span
                                    className='logo-text'
                                    onMouseEnter={() => setCursorType('navigate')}
                                    onMouseLeave={setCursorType}
                                    onClick={refreshPage}
                                >portf</span>
                                <span
                                    className='theme-switcher'
                                    onClick={toggleTheme}
                                    onMouseEnter={() => setCursorType('toggle_theme')}
                                    onMouseLeave={setCursorType}
                                ></span>
                                <span
                                    className='logo-text'
                                    onMouseEnter={() => setCursorType('navigate')}
                                    onMouseLeave={setCursorType}
                                    onClick={refreshPage}
                                >lio</span>
                            </Logo>
                            <Menu
                                className={`${open && 'is-open'}`}
                                onClick={toggle}
                                variants={headerVariants.fadeOut}
                            >
                                <motion.div
                                    className='menu-bar-wrapper'
                                    initial={false}
                                    animate={open ? 'open' : 'closed'}
                                >
                                    <motion.span className='menu-bar' custom={1} variants={headerVariants.menuBarBlock} />
                                    <motion.span className='menu-bar' variants={headerVariants.menuBarMiddle} />
                                    <motion.span className='menu-bar' custom={-1} variants={headerVariants.menuBarBlock} />
                                </motion.div>
                            </Menu>
                        </Flex>
                    </AnimeTrigger>
                </Container>
            </HeaderNav>
            <Navigation open={open} toggle={toggle} />
        </>
    )
}
