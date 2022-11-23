import React from 'react'
// framer motion
import { motion } from 'framer-motion'
// styles
import styled, { css, ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { media } from '../../styles/BreakPoint'
// constants
import { images } from '../../constants'
//context
import { useGlobalStateContext } from '../../context/GlobalContext'
// components
import { Header, Cursor, Pagination, Display, Frame } from '../../components'


const LayoutContainer = styled(motion.div)`
    width: 100vw;
    padding: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 20% auto;
    grid-template-rows: auto;
    grid-template-areas: "pagination main";
    &::before {
        content: '';
        position: fixed;
        top: -50%; left: -50%;
        width: 200%;
        height: 200%;
        background-image: url(${images.noise});
        opacity: 0.05;
    }
    ${media.laptop} {
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: "main";
    }
`

const HideBar = styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: ${props => props.theme.background};
    z-index: 5;
    &::before {
        content: '';
        position: fixed;
        left: 0;
        width: 100%;
        height: 20px;
        background-image: url(${images.noise});
        opacity: 0.05;
    }
    ${props => props.top && css`
        top: 0;
    `}
    ${props => props.bottom && css`
        bottom: 0;
    `}
`

const Main = styled.main`
    grid-area: main;
    display: block;
    width: 100%;
    overflow: hidden;
`

export const Layout = ({
    onDisplay,
    setOnDisplay,
    children,
}) => {

    // ThemeProvider variables
    const darkTheme = {
        background: 'var(--clr-bg-dark)',
        text: 'var(--clr-white)',
        textDiff: 'var(--clr-black)',
        border: 'var(--clr-white)',
        shadow: 'var(--drop-shadow-bg-dark)',
        box_shadow: 'hsl(0, 0%, 77%);',
        heroFontBackDrop: 'var(--clr-backdrop-light)',
        loadingBar: 'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
    }
    const lightTheme = {
        background: 'var(--clr-bg-light)',
        text: 'var(--clr-black)',
        textDiff: 'var(--clr-white)',
        border: 'var(--clr-black)',
        shadow: 'var(--drop-shadow-bg-light)',
        box_shadow: 'var(--clr-black)',
        heroFontBackDrop: 'var(--clr-backdrop-dark)',
        loadingBar: 'radial-gradient( circle 610px at 5.2% 51.6%,  #1b1b1e 0%, #0a0915 97.5% )',
    }
    // context
    const { currentTheme } = useGlobalStateContext()

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
            <LayoutContainer exit={{ opacity: 0, transition: { duration: 1 } }}>
                <HideBar top />
                <GlobalStyles />
                <Header />
                <Pagination />
                <Frame />
                <Display onDisplay={onDisplay} setOnDisplay={setOnDisplay} />
                <Cursor />
                <Main>{children}</Main>
                <HideBar bottom />
            </LayoutContainer>
        </ThemeProvider>
    )
}