import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

export const CustomButton = styled(motion.div)`
    position: relative;
    width: max-content;
    height: auto;
    font-size: var(--step--2);
    font-family: var(--font-family-main);
    box-shadow: var(--shadow);
    color: ${props => props.theme.text};
    &.__rectangle {
        padding: 1rem 2rem;
        border: 2px double ${props => props.theme.border};
        background-color: ${props => props.theme.background};
        transition: .5s;
        ${media.tablet} {
            padding: 0.5rem 1rem;
        }
        &::before {
            content: '';
            position: absolute;
            top: 7.5px; left: 7.5px;
            width: 100%; height: 100%;
            background-color: ${props => props.theme.border};
            z-index: -1;
        }
        &::after {
            content: '';
            position: absolute;
            top: 67%; left: 10%;
            width: 0; height: 1px;
            background-color: ${props => props.theme.border};
            transition: .5s ease-in-out;
        }
        &:active {
            left: 7.5px; top: 7.5px;
            &::before {
                top: 0; left: 0;
            }
        }
        &:hover {
            &::after {width: 70%;}
        }
    }

    &.__square {
        padding: 1rem;  
        border: 2px double ${props => props.theme.border};
        background-color: ${props => props.theme.background};
        ${media.tablet} {
            padding: 0.5rem;
        }
        &::before {
            content: '';
            position: absolute;
            top: 7.5px; left: 7.5px;
            width: 100%; height: 100%;
            background-color: ${props => props.theme.border};
            z-index: -1;
        }
        &::after {
            content: '';
            position: absolute;
            top: 67%; left: 10%;
            width: 0; height: 1px;
            background-color: ${props => props.theme.border};
            transition: .5s ease-in-out;
        }
        &::after {
            content: '';
            position: absolute;
            top: 67%; left: 10%;
            width: 0; height: 1px;
            background-color: ${props => props.theme.border};
            transition: .5s ease-in-out;
        }
        &:active {
            left: 7.5px; top: 7.5px;
            &::before {
                top: 0; left: 0;
            }
        }
    }

    &.__circle {        
        border: 3px solid ${props => props.theme.border};
        border-radius: 50%;
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        .button-text {
            font-size: 30px;
            letter-spacing: 2px;
            z-index: 3;
            ${media.mobile} {
                letter-spacing: 0;
            }
        }
        &::before {
            content: '';
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border: 3px solid ${props => props.theme.border};
            border-radius: 50%;
        }
        &:hover::before {
            animation: spread-outline .5s linear infinite;
        }
        @keyframes spread-outline {
            0% {
                transform: translate(-50%, -50%) scale(1); 
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1); 
                opacity: 0.5;
            }
            100% {
                transform: translate(-50%, -50%) scale(1.2); 
                opacity: 0;
            }
        }
    }
`
