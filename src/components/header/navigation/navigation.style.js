import styled from 'styled-components'
import { media } from '../../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(200, 200, 200, 0.9);
    z-index: 100;
`

export const NavMenu = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: #DCD9D4;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%);
    background-blend-mode: soft-light,screen;
    box-shadow: -5px 0 10px #d1cdc7;
    ${media.laptop} {
        width: 75%;
    }
    ${media.tablet} {
        width: 100%;
        min-width: 100%;
        box-shadow: none;
    }
    .nav-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 1.5rem 1rem;
        li {
            position: relative;
            display: inline-block;
            margin: 2rem;
            z-index: 1;
            .navigate{
                font-size: clamp(0.45rem, 0.45rem + 7.85vw, 4.48rem);
                font-weight: 500;
                font-family: var(--font-family-navigation);
                color: var(--clr-black);
                text-transform: uppercase;
                letter-spacing: 2px;
                white-space: nowrap;
                transition: .35s;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke-color: #444;
                -webkit-text-stroke-width: 2px;
                &:hover {
                    text-shadow: 1px -1px 0px #333,
                                2px -2px 0px #333,
                                3px -3px 0px #333,
                                4px -4px 0px #333;
                    -webkit-text-stroke-color: transparent;
                }
                &.active {
                    -webkit-text-fill-color: var(--clr-white);
                    &::before {
                        content: '';
                        position: absolute;
                        left: calc(-20% - 3rem);
                        top: 50%;
                        width: 3rem;
                        height: 2px;
                        background-color: var(--clr-white);
                        border: 1px solid var(--clr-black);
                        border-radius: 10px;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        left: 120%;
                        top: 50%;
                        width: 3rem;
                        height: 2px;
                        background-color: var(--clr-white);
                        border: 1px solid var(--clr-black);
                        border-radius: 10px;
                    }
                }
            }
        }
    }
`

export const Contact = styled(motion.li)`
    position: relative;
    z-index: 1;
    .navigate {
        font-size: clamp(0.45rem, 0.45rem + 7.85vw, 4.48rem);
        font-weight: 500;
        font-family: var(--font-family-pagination);
        color: var(--clr-black);
        text-transform: uppercase;
        letter-spacing: 2px;
        white-space: nowrap;
        transition: .35s;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-color: #444;
        -webkit-text-stroke-width: 2px;
        &:hover {
            text-shadow: 1px -1px 0px #333,
                        2px -2px 0px #333,
                        3px -3px 0px #333,
                        4px -4px 0px #333;
            -webkit-text-stroke-color: transparent;
        }
        &.expanded {
            text-decoration: line-through;
            text-shadow: 1px -1px 0px #333,
                        2px -2px 0px #333,
                        3px -3px 0px #333,
                        4px -4px 0px #333;
            -webkit-text-stroke-color: transparent;
        }
    }
    .toggle-sign {
        position: relative;
        margin-left: 1rem;
        display: inline-block;
        .sign {
            font-size: var(--step-header-logo);
            opacity: 0.8;
        }
    }
`

export const List = styled(motion.ul)`
    position: absolute;
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90% 10%;
    grid-template-areas: 
        "icon1 icon2"
        "copyText copyText";
    white-space: nowrap;
    margin-top: 1rem;
    .icon-wrapper {
        width: 7rem;
        height: 7rem;
        padding: 1rem;
        border: 2px solid black;
        border-radius: 20px;
        position: relative;
        justify-self: center;
        overflow: hidden;
        &.phone {grid-area: icon1;}
        &.mail {grid-area: icon2;}
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: hsla(0, 0%, 0%, 0.5);
            clip-path: circle(0% at 50% 50%);
            transition: clip-path .7s;
        }
        &:hover::before{
            clip-path: circle(150% at 50% 50%);
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .copy-text {
        grid-area: copyText;
        justify-self: center;
        font-size: 1rem;
        font-family: var(--font-family-main);
        
    }
`