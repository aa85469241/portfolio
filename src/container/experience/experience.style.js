import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'
import { images } from '../../constants'


export const ExpContainer = styled.div`
    position: relative;
    inset: 0;
    width: 100%;
    height: calc(100% - 50px);

    .title_wrapper {
        position: absolute;
        top: -8%;
        left: 10%;
        h1 {
        font-size: var(--step-title);
        font-weight: 600;
        font-family: var(--font-family-main);
        letter-spacing: 5px;
        text-transform: uppercase;
        color: ${props => props.theme.text};
        margin: 0;
        text-shadow: 3px 3px 3px grey;
        &::first-letter {
            font-size: calc(var(--step-title) * 1.2);
        }
        }
    }
`

export const Root = styled.section`
    position: relative;
    height: 80%;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: auto;
    grid-margin: 3rem;
    grid-gap: 3rem;
    margin: 0 auto;
    padding-top: 2.5rem;
    ${media.laptop} {
        grid-template-columns: repeat(9, 1fr);
        grid-margin: 1.5rem;
        grid-gap: 1.5rem;
        padding-top: 2rem;
    }
    ${media.tablet} {
        grid-template-columns: repeat(7, 1fr);
        grid-margin: 1rem;
        grid-gap: 1rem;
        padding-top: 1.1rem;
    }
`

export const Carousel = styled.div`
    position: relative;
    grid-column: 4 / -1;
    overflow: hidden;
    .inner-carousel {
        position: relative;
        width: fit-content;
        height: 95%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }
    ${media.laptop} {
        height: 92%;
        grid-column: 3 / -1;
    }
    ${media.tablet} {
        margin-inline: 2px;
        grid-column: 1 / -1;
    }
`

export const LockChecker = styled(motion.div)`
    grid-column-end: 4;
    position: relative;
    top: 50px;
    height: fit-content;
    transform: translate(50px, 0);
    .lock-checker {
        width: 80px;
        aspect-ratio: 1 / 1;
        border: 2px solid ${props => props.theme.border};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: ${props => props.theme.text};
        opacity: 0.1;
    }
    ${media.laptop} {
        grid-column-end: 3;
        transform: translate(25px, 0);
    }
    ${media.tablet} {
        display: none;
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

export const InfoContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    padding-top: var(--step-0);
    padding-inline: 2rem;
    position: relative;
    height: 95%;
    aspect-ratio: 4 / 5;
    .period {
        font-size: var(--step-exp-period);
        font-family: var(--font-family-main);
        letter-spacing: 5px;
        color: ${props => props.theme.text};
        margin-inline: auto;
        z-index: 3;
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

