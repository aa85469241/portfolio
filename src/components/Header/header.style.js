import styled from 'styled-components'
import { media } from '../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const HeaderNav = styled.header`
    grid-area: header;
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    height: 80px;
    z-index: 102;
    ${media.laptop} {
        height: 60px;
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
    transition: 1s cubic-bezier(0.19, 0.38, 0.05, 1);
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
            background-color: ${props => props.theme.text};
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
        color: ${props => props.theme.text};
        text-transform: uppercase;
    }
`
