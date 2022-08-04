import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const LoaderOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 999;
    .overlay-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 25%;
        height: 100%;
        background-color: var(--clr-black);
        &:nth-child(2) {left: 25%;}
        &:nth-child(3) {left: 50%;}
        &:nth-child(4) {left: 75%;}
        ${media.mobile} {
            width: 100%;
            height: 25%;
            &:nth-child(2) {
                left: 0; 
                top: 25%;
            }
            &:nth-child(3) {
                left: 0; 
                top: 50%;
            }
            &:nth-child(4) {
                left: 0; 
                top: 75%;
            }
        }
    }
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
        height: 100px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        .loader-text {
            font-size: var(--step-hero);
            font-family: var(--font-family-navigation);
            text-transform: uppercase;
            color: var(--clr-white);
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
        color: var(--clr-white);
    }
    .loading-bar-track {
        position: relative;
        width: clamp(20.00rem, calc(12.38rem + 29.47vw), 40.00rem);
        height: 50px;
        border: 2px solid var(--clr-white);
        border-radius: 20px;
        padding: 3px;
        display: flex;
        align-items: center;
        overflow: hidden;
        .loading-bar-thumb {
            width: 0;
            height: 100%;
            background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
            border-radius: 15px;
        }
    }
`