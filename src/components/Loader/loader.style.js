import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const LoaderOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 999;
`

export const LoaderTexts = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LettersContainer = styled(motion.div)`
    position: relative;
    display: flex;
    overflow: hidden;
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--clr-wood);
        z-index: 0;
    }
    .loader-text-wrap {
        width: 100px;
        aspect-ratio: 1;
        border: 2px solid ${props => props.theme.border};
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        .loader-text {
            font-size: var(--step-hero);
            font-family: var(--font-family-navigation);
            text-transform: uppercase;
            color: ${props => props.theme.text};
        }
        ${media.laptop} {
            width: 75px;
        }
        ${media.tablet} {
            width: 50px;
        }
        ${media.mobile} {
            width: 40px;
        }
    }
`

export const Loading = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    .loading-text {
        font-size: var(--step-hero);
        font-family: var(--font-family-navigation);
        color: ${props => props.theme.text};
    }
    .loading-bar-track {
        position: relative;
        width: clamp(20.00rem, calc(12.38rem + 29.47vw), 40.00rem);
        height: 50px;
        border: 2px solid ${props => props.theme.border};
        border-radius: 20px;
        padding: 3px;
        display: flex;
        align-items: center;
        overflow: hidden;
        .loading-bar-thumb {
            width: 0;
            height: 100%;
            background-image: ${props => props.theme.loadingBar};
            border-radius: 15px;
        }
    }
`