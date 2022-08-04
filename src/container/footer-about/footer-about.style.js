import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const Footer = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 40vh;
    background-color: ${props => props.theme.backgroundDiff};
    overflow: hidden;
`

export const ClipPath = styled(motion.div)`
    position: absolute;
    inset: 0;
    background-color: ${props => props.theme.background};
`

export const FooterSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding-top: 2rem;
`

export const Row = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    padding-inline: 2rem;
    margin-top: 2rem;
    z-index: 2;
    ${media.laptop} {
        grid-template-columns: auto;
        grid-template-rows: 30% 70%;
        gap: 1rem;    
    }
    ${media.mobile} {
        padding-inline: 0;
    }
`

export const Buttons = styled(motion.div)`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid ${props => props.theme.border};
    gap: 1rem;
    div {
        border: 2px solid ${props => props.theme.border};
        max-width: fit-content;
        font-size: var(--step-footer);
        font-family: var(--font-family-main);
        color: ${props => props.theme.text};
        display: flex;
        align-items: center;
        padding: 1rem;
        position: relative;
        overflow: hidden;
        a { color: inherit; }
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--clr-wood);
            clip-path: circle(0% at 50% 100%);
            transition: clip-path .5s;
            z-index: -1;
        }
        &:hover::before {
            clip-path: circle(100.1% at 50% 100%);
        }
    }
    ${media.laptop} {
        border-right: none;
    }
`

export const ContactInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    span {
        display: inline-block;
        font-size: 4.5rem;
        font-weight: 400;
        font-family: var(--font-family-navigation);
        text-transform: uppercase;
        margin-left: 40%;
        &:nth-of-type(2) {
            font-size: 2rem;
            color: var(--clr-red);
        }
        a {
            color: transparent;
            -webkit-text-stroke: 2px;
            -webkit-text-stroke-color: ${props => props.theme.text};
            &:hover {
                color: ${props => props.theme.text};
                transition: color 0.5s;
            }
        }
    }
    .phone {margin-left: 11.5%;}
    ${media.mobile} {
        align-items: center;
        span {
            font-size: 2.5rem;
            letter-spacing: 6px;
            margin-left: 0;
        }
        .phone {
            margin-left: 0;
        }
    }
`

export const CopyRight = styled.div`
    position: absolute;
    right: 5%;
    bottom: 3%;
    display: flex;
    align-items: center;
    gap: .2rem;
    span {
        color: ${props => props.theme.text};
        letter-spacing: 0.5px;
    }
    a {
        color: ${props => props.theme.text};
    }
`