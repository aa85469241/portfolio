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
import { media } from '../../styles/BreakPoint'


const LayoutContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% auto;
    grid-template-areas: 
        "header header"
        "pagination main";
    width: 100vw;
    height: 100vh;
    padding: 20px;
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
    ${media.laptop} {
        grid-template-columns: auto;
        grid-template-rows: 12% auto 10%;
        grid-template-areas: 
            "header"
            "main"
            "pagination";
    }
`

const Frame = styled.div`
    position: fixed;
    inset: 0;
    padding: 20px;
    &::before {
        content: '';
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
        border: 2px solid ${props => props.theme.border};
    }
`

const Main = styled.main`
    grid-area: main;
    display: block;
    width: 100%;
    margin: auto;
    overflow: hidden;
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
                <Frame />
                <Cursor />
                <Main>{children}</Main>
            </LayoutContainer>
        </ThemeProvider>
    )
}