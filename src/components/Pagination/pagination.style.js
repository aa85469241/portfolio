import styled from 'styled-components'
import { media } from '../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const PaginationContainer = styled.div`
    grid-area: pagination;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 2rem 3rem;
    padding-block: 1rem;
    z-index: 20;
    ${media.laptop} {
        left: 0;
        right: 0;
        margin: 1rem 0;
    }
    ${media.mobile} {
        margin: 1rem 1.5rem;
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
            height: 2rem;
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

