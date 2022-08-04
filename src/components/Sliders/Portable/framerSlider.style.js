import styled from 'styled-components'
import { motion } from 'framer-motion'
import { images } from '../../../constants'

export const Carousel = styled.div`
    position: relative;
    bottom: 0;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    overflow: hidden;
`


export const Scroller = styled(motion.div)`
    position: relative;
    width: fit-content;
    height: 95%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`

export const InfoContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    padding-top: var(--step-0);
    padding-inline: 2rem;
    position: relative;
    /* width: 500px; */
    height: 95%;
    aspect-ratio: 4 / 5;
    .period {
        font-size: var(--step-exp-period);
        font-family: var(--font-family-main);
        letter-spacing: 5px;
        color: ${props => props.theme.text};
        margin-inline: auto;
    }
    div[data-dashed-board] {
        background-image: url(${images.dashedBoard});
        background-repeat: no-repeat;
        background-size: 100% 95%;
        background-position: center;
        position: relative;
        display: flex;
        align-items: end;
        justify-content: center;
        overflow: hidden;
        img {
            width: 100px;
            filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.7));
            opacity: 0;
        }
        span {
            position: absolute;
            left: 50%;
            bottom: 10%;
            text-align: center;
            transform: translateX(-50%);
            padding: 0.7rem;
            background-color: ${props => props.theme.background};
            color: ${props => props.theme.text};
            font-size: 1.2rem;
            font-family: var(--font-family-main);
            font-weight: 600;
            white-space: nowrap;
            opacity: 0;
        }
    }
`

export const CardContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    svg {
        position: absolute;
        top: 0; 
        width: 100%;
        height: 100%;
        path {
            stroke: ${props => props.theme.border};
            stroke-width: 3px;
            filter: drop-shadow(8px 8px 5px ${props => props.theme.border});
        }
    }
    .experience_card_content {
        height: 100%;
        display: grid;
        grid-template-rows: 20% auto;
        color: ${props => props.theme.text};
        padding: 1.8rem;
        line-height: 2;
        overflow: hidden;
        h1 {
            font-size: 1.5rem;
            font-family: var(--font-family-main);
            margin-inline: auto;
        }
        ul {
            display: flex;
            flex-direction: column;
            list-style: decimal;
            padding: 0 1.5rem;
            li {
                font-size: 1rem;
                font-family: var(--font-family-main);
                /* margin-block: 0.5rem; */
            }
        }
    }
`

export const ProgressBar = styled(motion.div)`
    position: relative;
    left: 20px;
    bottom: 0px;
    width: calc(100% - 40px);
    height: 10px;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    box-shadow: inset -2px -2px 5px var(--clr-white),
                inset 2px 2px 5px var(--clr-black);
    .progress-bar {
        position: absolute;
        left: 0; top: 50%;
        transform: translateY(-50%);
        height: calc(100% - 4px);
        border-radius: 5px;
        background-color: ${props => props.theme.border};
    }
`