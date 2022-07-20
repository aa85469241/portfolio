import styled from 'styled-components'
import { media } from '../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const HeaderNav = styled.header`
    grid-area: header;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: fit-content;
    padding: 2rem 1.5rem;
    z-index: 102;
    ${media.mobile} {
        padding: 1.5rem 0;
    }
`

export const Logo = styled(motion.div)`
    display: flex;
    align-items: center;
    .logo-text {
        display: inline-block;
        color: ${props => props.theme.text};
        font-size: var(--step-header-logo);
        font-weight: 600;
        font-family: var(--font-family-main);
        text-transform: uppercase;
        letter-spacing: 5px;
        &:last-of-type {
                margin-left: 5px;
            }
        ${media.tablet} {
            font-weight: 700;
        }
    }
    .theme-switcher {
        position: relative;
        width: var(--step-header-switch);
        height: var(--step-header-switch);
        margin-inline: 5px;
        display: inline-block;
        border-radius: 50%;
        background-color: var(--clr-red);
    }
`

export const Menu = styled(motion.div)`
    position: relative;
    height: 4rem;
    width: 10rem;
    display: flex;
    align-items: center;
    background-color: var(--clr-dark-red);
    clip-path: inset(0.5rem 0 0.5rem 0 round 10rem);
    transition: 1s cubic-bezier(0.19, 0.38, 0.05, 1);
    &.is-open {
        clip-path: inset(0.25rem 1rem 0.25rem 5.5rem round 10rem);
    }
    &:hover {
        background-color: var(--clr-red);
    }
    .menu-bar-wrapper {
        position: absolute;
        left: 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        .menu-bar {
            width: 40px;
            height: 2.1px;
            background-color: var(--clr-white);
            transform-origin: 45% 50%;
            &:nth-of-type(2) {
                margin-left: 50%;
            }
        }
    }
    .menu-text {
        position: absolute;
        left: 1.5rem;
        font-size: 20px;
        font-family: var(--font-family-main);
        font-weight: 600;
        color: var(--clr-white);
        text-transform: uppercase;
    }
`