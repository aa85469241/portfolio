import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// styles
import { GlobalStyles } from '../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
// components
import { Cursor, Header } from '../../components'
// context
import { useGlobalStateContext } from '../../context/GlobalContext'
//constants
import { images } from '../../constants'
//variants
import { pageTransform } from '../../variants'

const LayoutContainer = styled(motion.div)`
    position: relative;
    &::before {
        content: '';
        position: fixed;
        top: -50%; left: -50%;
        width: 200%;
        height: 200%;
        background: url(${images.noise});
        opacity: 0.05;
        z-index: 1;
    }
`

export const Layout = ({ children }) => {
    const { currentTheme } = useGlobalStateContext()

    const dark = {
        background: 'var(--clr-bg-dark)',
        backgroundDiff: 'var(--clr-bg-dark-diff)',
        border: 'var(--clr-white)',
        text: 'var(--clr-white)',
        textDiff: 'var(--clr-black)',
    }
    const light = {
        background: 'var(--clr-bg-light)',
        backgroundDiff: 'var(--clr-bg-light-diff)',
        border: 'var(--clr-black)',
        text: 'var(--clr-black)',
        textDiff: 'var(--clr-white)',
    }

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
            <LayoutContainer
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransform}
            >
                <GlobalStyles />
                <Header delaySec={1} />
                <Cursor dotColor='grey' outlineColor='grey' />
                <main>
                    {children}
                </main>
            </LayoutContainer>
        </ThemeProvider>
    )
}