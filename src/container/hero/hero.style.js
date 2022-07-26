import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'


export const Banner = styled.div`
    position: relative;
    left: 0;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 80px 0 20px 20%;
`

export const Section = styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100%;
    .wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
    }
`

export const Row = styled.div`
    display: flex;
    gap: 1.5rem;
    overflow: hidden;
    .row-text {
        font-size: var(--step-hero-main);
        font-family: var(--font-family-hero);
        font-weight: 600;
        color: ${props => props.theme.text};
        letter-spacing: 5px;
        white-space: nowrap;
        .portfolio {
            -webkit-text-stroke-color: ${props => props.theme.text};
            -webkit-text-stroke: 2px;
            -webkit-text-fill-color: transparent;
        }
        ${media.laptop} {
            white-space: normal;
        }
    }
`

export const RowText = styled(motion.span)`
    font-size: var(--step-hero-main);
    font-family: var(--font-family-hero);
    color: ${props => props.theme.text};
    position: relative;
    letter-spacing: 5px;
    white-space: nowrap;
    ${media.laptop} {
        white-space: normal;
    }
`

export const ScrollSign = styled(motion.div)`
    position: relative;
    margin-inline: auto;
    display: flex;
    .scroll-sign-text {
        font-size: 1.2rem;
        font-family: var(--font-family-hero);
        letter-spacing: 4px;
        text-transform: uppercase;
        white-space: nowrap;
        color: ${props => props.theme.text};
    }
    .scroll-sign-middle {
        display: flex;
        gap: 5px;
        margin-inline: 20px;
        .scroll-sign-text-middle {
            font-size: 1.2rem;
            font-family: var(--font-family-hero);
            text-transform: uppercase;
            color: ${props => props.theme.text};
        }
        .scroll-sign {
            position: relative;
            width: 15px;
            height: 25px;
            border: 2px solid ${props => props.theme.border};
            border-radius: 15px;
            margin-block: auto;
            .scroll-sign-dot {
                position: absolute;
                top: 1px; left: 33%;
                width: 5px;
                height: 5px;
                background: ${props => props.theme.border};
                border-radius: 50%;
            }
        }
    }
    &:hover {
        transition: .5s ease-in-out;
        filter: drop-shadow(1px 1px 2px ${props => props.theme.text});
    }
`