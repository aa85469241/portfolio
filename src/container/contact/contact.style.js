import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const ContactContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 40px);
    padding: 1rem;
    padding-top: 80px;
    overflow: hidden;
    ${media.laptop} {
        padding-block: 60px 80px;
    }
    ${media.mobile} {
        padding-top: 40px;
    }
`

export const ContactSection = styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 25% auto;
    .leading-text-wrapper {
        max-width: 80%;
        line-height: 2;
        margin-inline: auto;
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
        grid-template-rows: 30% auto;
    }
    ${media.mobile} {
        padding: 1rem;
        letter-spacing: 2px;
        .leading-text-wrapper {
            max-width: 100%;
            line-height: 1.5;
        }
    }
`

export const ContactInfo = styled(motion.div)`
    position: absolute;
    top: 0;
    width: 75vw;
    height: 60vh;
    left: 50%;
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    justify-content: center;
    transform: translateX(-50%);
    .contact-number {
        grid-row-end: -2;
        display: block;
        color: ${props => props.theme.text};
        font-size: var(--step-contact);
        font-family: var(--font-family-main);
        letter-spacing: 1rem;
        margin-bottom: 1rem;
        filter: ${props => props.theme.shadow};
    }
    .crack {
        grid-row-end: -2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: .8;
        filter: ${props => props.theme.shadow};
        z-index: -1;
    }
    .close-button {
        grid-row-end: -1;
        position: relative;
        width: 200px;
        height: 50px;
        margin-inline: auto;
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
        .contact-number, .crack {
            grid-row-end: 6;
        }
        .close-button {
            grid-row-end: 8;
        }
    }
    ${media.tablet} {
        top: 21%;
        width: 100%;
        height: 45vh;
    }
    ${media.mobile} {
        top: 18%;
        .contact-number, .crack {
            grid-row-end: -3;
        }
        .close-button {
            grid-row-end: -2;
        }
    }
`

export const Buttons = styled(motion.div)`
    position: relative;
    color: ${props => props.theme.text};
    display: block;
    align-self: center;
    margin-inline: auto;
`

export const BackToTop = styled(motion.div)`
    position: absolute;
    bottom: 1rem;
    right: 3%;
    width: fit-content;
    height: auto;
    font-family: var(--font-family-main);
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
        bottom: 8%;
        right: 0;
    }
    ${media.tablet} {
        .or {
            font-size: 20px;
        }
    }
`