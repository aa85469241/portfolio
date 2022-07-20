import styled, { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { motion } from 'framer-motion'

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        --clr-black: #000000;
        --clr-white: #FFFFFF;
        --clr-red: #EF4A4A;
        --clr-dark-red: #b30000;
        --clr-brown: #EFD0A2;
        --clr-wood: #DEB887;
        --clr-wood-strong: #a06e2c;
        --clr-cursor: ${props => props.theme.text};
        --clr-bg-light: hsl(37, 27%, 94%);//#f4f1ec #FAF6F3
        --clr-bg-light-diff: hsl(0, 0%, 20%);
        --clr-bg-dark: hsl(0, 0%, 29%);
        --clr-bg-dark-diff: hsl(43, 21%, 83%);
        --clr-backdrop-light: hsla(0, 0%, 100%, 0.5);
        --clr-backdrop-dark: hsla(0, 0%, 0%, 0.5);

        --font-family-body: 'Fira Sans', sans-serif;
        --font-family-hero: 'Righteous', cursive;
        --font-family-navigation: 'Russo One', sans-serif;
        --font-family-main: 'Changa', sans-serif;
        --font-family-subtext: 'Akaya Telivigala', cursive;
        --font-family-contact: 'Abel', sans-serif;
        --font-family-chinese: arial,"Microsoft JhengHei","微軟正黑體",sans-serif;

        // font size
        --step--1: clamp(0.42rem, 0.15rem + 1.50vw, 1.50rem);
        --step-0: clamp(0.50rem, 0.16rem + 1.90vw, 1.88rem);
        --step-1: clamp(0.60rem, 0.17rem + 2.42vw, 2.34rem);
        --step-title: clamp(3.13rem, calc(2.65rem + 1.84vw), 4.38rem);
        
        --step-hero-main: clamp(3.13rem, calc(1.95rem + 4.53vw), 6.20rem);
        --step-hero-subtext: clamp(1.38rem, calc(1.01rem + 1.42vw), 2.34rem);
        
        --step-header-logo: clamp(0.94rem, calc(0.58rem + 1.38vw), 1.88rem);
        --step-header-switch: clamp(0.75rem, calc(0.44rem + 1.20vw), 1.56rem);
        
        --step-profile-content: clamp(1.56rem, calc(1.32rem + 0.92vw), 2.19rem);
        
        --step-exp-carousel: clamp(26.25rem, calc(23.87rem + 9.21vw), 32.50rem);
        --step-exp-card: clamp(12.50rem, calc(11.31rem + 4.60vw), 15.63rem);
        --step-exp-period: clamp(1.0rem, calc(0.61rem + 0.74vw), 1.30rem);
        
        --step-contact: clamp(1.88rem, calc(-0.63rem + 9.67vw), 8.44rem);
        --step-contact-return-button: clamp(1.38rem, calc(1.18rem + 0.74vw), 1.88rem);
        
        --step-page-about-skill: clamp(2.00rem, calc(1.24rem + 2.95vw), 4.00rem);

        --step-footer: clamp(1.70rem, calc(1.20rem + 1.92vw), 3.00rem);
        
        /* font shadow */
        --shadow-1: 2px 2px 5px rgba(0, 0, 0, 0.75);
        --drop-shadow-bg-light: drop-shadow(3px 3px 5px hsl(0, 0%, 25%));
        --drop-shadow-bg-dark: drop-shadow(3px 3px 5px hsl(0, 0%, 90%));
        --font-shadow-hero: drop-shadow(2px 2px 3px rgba(0, 0, 0, 1))
                                        drop-shadow(-2px -2px 3px rgba(255, 255, 255, 1));
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        cursor: none;
    }

    html {
        font-size: 16px;
        font-family: var(--font-family-body);
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${props => props.theme.background};
        line-hight: 1.5;
        overflow-x: hidden;
        user-select: none;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
        }
        &::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #bdc3c7, #2c3e50);
            border-radius: 20px;
            &:hover {
                background: linear-gradient(to left, #0f2027, #203a43, #2c5364);
            }
        }
    }
`

export const Container = styled.div`
    position: relative;
    width: auto;
    height: 100%;
    padding: ${({ pd }) => pd ? pd : '0 2rem;'};
    background-color: ${({ background }) => background};
    overflow: hidden;
`

export const Flex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'row'};
    align-items: ${({ align }) => align ? align : 'center'};
    justify-content: ${({ justify }) => justify ? justify : 'center'};
`

export const Bar = styled(motion.span)`
    position: absolute;
    display: block;
    background-color: ${props => props.theme.border};
    opacity: 0.3;
    transform: scale(0.95);
    z-index: 10;
    ${props => props.right && css`
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
    `}
    ${props => props.left && css`
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
    `}
    ${props => props.top && css`
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
    `}
    ${props => props.bottom && css`
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
    `}
    ${props => props.none && css`
        display: none;
    `}
`