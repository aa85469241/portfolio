import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const ContactContainer = styled.div`
    position: relative;
    inset: 0;
    width: 100%;    
    height: calc(100% - 50px);
    overflow: hidden;
    ${media.mobile} {
        padding-top: 2rem;
    }
`

export const ContactSection = styled(motion.section)`
    position: relative;
    width: 100%;
    height: calc(80vh - 2rem);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .leading-text-wrapper {
        max-width: 60%;
        line-height: 2;
        .contact-leading-text {
            display: inline-block;
            font-size: clamp(1.25rem, calc(1.01rem + 0.92vw), 1.88rem);
            font-family: var(--font-family-main);
            color: ${props => props.theme.text};
            letter-spacing: 5px;
            word-wrap: break-word;
        }
    }
    ${media.laptop} {   
        .leading-text-wrapper {
            max-width: 75%;
        }
    }
    ${media.tablet} {
        .leading-text-wrapper {
            max-width: 80%;
        }
    }
    ${media.mobile} {
        padding: 2rem 1rem;
        letter-spacing: 2px;
        .leading-text-wrapper {
            max-width: 100%;
        }
    }
`

export const ContactInfo = styled(motion.div)`
    position: absolute;
    top: 8%;
    width: 75vw;
    height: 70vh;
    left: 50%;
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    justify-content: center;
    transform: translateX(-50%);
    .contact-number {
        grid-row-end: -3;
        display: block;
        color: ${props => props.theme.text};
        font-size: var(--step-contact);
        font-family: var(--font-family-main);
        letter-spacing: 1rem;
        margin-bottom: 1rem;
        filter: ${props => props.theme.shadow};
    }
    .crack {
        grid-row-end: -3;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: .8;
        filter: ${props => props.theme.shadow};
        z-index: -1;
    }
    .close-button {
        grid-row-end: -3;
        position: absolute;
        bottom: 0; left: 50%;
        width: 200px;
        height: 50px;
        transform: translate(-50%, 150%);
        path {
            stroke-width: 3px;
            stroke: ${props => props.theme.border};
            fill: none;
        }
    }
    ${media.laptop} {
        top: 15%;
        width: 83vw;
        height: 55vh;
    }
    ${media.tablet} {
        top: 21%;
        width: 100%;
        height: 45vh;
    }
    ${media.mobile} {
        top: 18%;
    }
`

export const Buttons = styled(motion.div)`
    position: relative;
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
`

export const BackToTop = styled(motion.div)`
    position: absolute;
    bottom: 15%;
    right: 5%;
    width: fit-content;
    height: auto;
    font-family: var(--font-family-contact);
    white-space: nowrap;
    display: flex;
    margin-left: auto;
    align-items: center;
    letter-spacing: 2px;
    gap: 0.8rem;
    .or {
        display: inline-block;
        font-size: 30px;
        color: ${props => props.theme.text};
    }
    ${media.laptop} {
        flex-direction: column;
        width: 100%;
        right: 0;
    }
    ${media.tablet} {
        .or {font-size: 25px;}
    }
`