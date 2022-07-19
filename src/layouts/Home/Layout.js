import React from 'react'
// framer motion
import { motion } from 'framer-motion'
// styles
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
// components
import { Header, Cursor, Pagination } from '../../components'
import { useGlobalStateContext } from '../../context/GlobalContext'
import { images } from '../../constants'


const LayoutContainer = styled(motion.div)`
    position: relative;
    height: calc(100vh - 20px);
    background-color: ${props => props.theme.background};
    margin: 10px;
    border: 2px solid ${props => props.theme.border};
    overflow: hidden;
    &::before {
        content: '';
        position: fixed;
        top: -50%; left: -50%;
        width: 200%;
        height: 200%;
        background: url(${images.noise});
        opacity: 0.05;
    }
`

export const Layout = ({
    pagination,
    setPagination,
    children,
}) => {

    // ThemeProvider variables
    const darkTheme = {
        background: 'var(--clr-bg-dark)',
        text: 'var(--clr-white)',
        textDiff: 'var(--clr-black)',
        border: 'var(--clr-white)',
        shadow: 'var(--drop-shadow-bg-dark)',
        heroFontBackDrop: 'var(--clr-backdrop-light)',
    }
    const lightTheme = {
        background: 'var(--clr-bg-light)',
        text: 'var(--clr-black)',
        textDiff: 'var(--clr-white)',
        border: 'var(--clr-black)',
        shadow: 'var(--drop-shadow-bg-light)',
        heroFontBackDrop: 'var(--clr-backdrop-dark)',
    }
    // context
    const { currentTheme } = useGlobalStateContext()

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
            <LayoutContainer exit={{ opacity: 0, transition: { duration: 1 } }}>
                <GlobalStyles />
                <Header />
                <Pagination pagination={pagination} setPagination={setPagination} />
                <Cursor />
                <main>{children}</main>
            </LayoutContainer>
        </ThemeProvider>
    )
}