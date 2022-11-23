import styled, { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { motion } from 'framer-motion'
import BrightWoff from '../assets/font/BrightDemo.woff'
import BoldestEnough from '../assets/font/BoldestEnough.otf'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "bright";
        src: url(${BrightWoff}) format("woff");
    }
    @font-face {
        font-family: "boldest_enough";
        src: url(${BoldestEnough}) format("opentype");
    }
`

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        --clr-black: #333333;
        --clr-white: rgb(253, 245, 230);
        --clr-red: #EF4A4A;
        --clr-dark-red: #b30000;
        --clr-brown: #EFD0A2;
        --clr-gray: #A9A9A9;
        --clr-wood: rgba(222, 184, 135, 0.6);
        --clr-wood-strong: #a06e2c;
        --clr-cursor: ${props => props.theme.text};
        --clr-bg-light: hsl(37, 27%, 94%);
        --clr-bg-light-diff: hsl(0, 0%, 20%);
        --clr-bg-dark: hsl(0, 0%, 29%);
        --clr-bg-dark-diff: hsl(43, 21%, 83%);
        --clr-backdrop-light: hsla(0, 0%, 100%, 0.5);
        --clr-backdrop-dark: hsla(0, 0%, 0%, 0.5);
        --clr-intro-card-bg: hsla(50, 10%, 85%);

        --font-family-navigation: 'Russo One', sans-serif;
        --font-family-hero: 'boldest_enough';
        --font-family-main: 'Changa', sans-serif;
        --font-family-chinese: arial, "Microsoft JhengHei","微軟正黑體",sans-serif;

        // font size
        --step--1: clamp(0.42rem, 0.15rem + 1.50vw, 1.50rem);
        --step-0: clamp(0.50rem, 0.16rem + 1.90vw, 1.88rem);
        --step-1: clamp(0.60rem, 0.17rem + 2.42vw, 2.34rem);
        --step-title: clamp(2.81rem, calc(2.24rem + 2.21vw), 4.38rem);
        
        --step-hero: clamp(3.00rem, calc(1.18rem + 7.04vw), 6.00rem);
        
        --step-header-logo: clamp(0.94rem, calc(0.58rem + 1.38vw), 1.88rem);
        --step-header-switch: clamp(0.75rem, calc(0.44rem + 1.20vw), 1.56rem);
        
        --step-profile-content: clamp(1.20rem, calc(0.83rem + 1.43vw), 2.20rem);
        
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
        font-family: var(--font-family-main);
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${props => props.theme.background};
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
    opacity: 1;
    z-index: 99;
    ${props => props.lower__layer && css`
        z-index: 1;
    `}
    ${props => props.lighten && css`
        opacity: 0.3;
    `}
    ${props => props.right && css`
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
    `}
    ${props => props.left && css`
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
    `}
    ${props => props.top && css`
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    `}
    ${props => props.bottom && css`
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
    `}
    ${props => props.none && css`
        display: none;
    `}
`