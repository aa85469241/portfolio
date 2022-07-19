import styled from 'styled-components'
import {media} from '../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const PaginationContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 3% 3%;
    z-index: 20;
    ${media.laptop} {
        width: calc(100% - 20px);
        height: 70px;
        margin: 0 10px;
    }
`

export const Pages = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    gap: 1rem;
    .page-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1rem;
        &::before {
            content: '';
            position: absolute;
            top: -20%;
            left: -10%;
            width: 120%;
            height: 120%;
            border: 2px solid ${props => props.theme.border};
            border-radius: 50%;
            opacity: 0;
            transition: .3s ease-in-out;
        }
        &:hover::before {
            opacity: 1;
        }
        .page-checkbox {
            position: relative;
            width: 2rem;
            aspect-ratio: 1 / 1;
            border: 3px solid ${props => props.theme.border};
            .selected {
                position: absolute;
                left: 50%; top: 50%;
                transform: translate(-50%, -50%);
                display: block;
                width: 95%;
                height: 95%;
                background-color: ${props => props.theme.border};
            }
        }
        .page-name {
            position: relative;
            font-size: var(--step-1);
            font-family: var(--font-family-main);
            color: ${props => props.theme.text};
            .slider {
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: 3px;
                background-color: ${props => props.theme.text};
                ${media.tablet} {
                    height: 1px;
                }
            }
        }
    }
    ${media.laptop} {
        flex-direction: row;
        gap: 0;
        .page-container {
            gap: 0.5rem;
        }
    }
`

