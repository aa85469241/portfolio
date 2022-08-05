import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'


export const Banner = styled.div`
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
        padding: 0.5rem;
        padding-block: 40px 80px;
    }
`

export const Section = styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100%;
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Row = styled(motion.div)`
    position: relative;
    height: fit-content;
    padding-left: 3%;
    overflow: hidden;
    ${props => props.center && css`
        text-align: center;
    `}
    &:nth-of-type(2) {
        padding-left: 11%;
    }
    &:nth-of-type(3) {
        padding-left: 19%;
    }
    .row-wrap {
        width: fit-content;
        padding: 1rem;
        .row-text {
            display: inline-block;
            border-bottom: 2px solid ${props => props.theme.border};
            font-size: clamp(1.50rem, calc(0.41rem + 4.23vw), 4.50rem);
            text-size-adjust: auto;
            font-family: var(--font-family-navigation);
            text-transform: uppercase;
            letter-spacing: 5px;
            color: ${props => props.theme.text};
            white-space: nowrap;
            transform: skew(20deg);
            text-shadow: -1px 1px 0 gray,
                    -2px 2px 0 gray,
                    -3px 3px 0 gray,
                    -4px 4px 0 gray;
        }
    }
    .row-wrap-portfolio {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        div {
            transform: skew(20deg);
            overflow: hidden;
            .row-text-portfolio {
                font-size: clamp(3.00rem, calc(1.27rem + 6.69vw), 7.75rem);
                font-family: var(--font-family-hero);
                letter-spacing: 15px;
                text-transform: uppercase;
                color: ${props => props.theme.text};
            }
        }
    }
    ${media.landscape} {
        &:nth-of-type(2) {
            padding-left: 8%;
        }
        &:nth-of-type(3) {
            padding-left: 13%;
        }
    }
    ${media.mobile} {
        padding-left: 0;
        &:nth-of-type(2) {
            padding-left: 0;
        }
        &:nth-of-type(3) {
            padding-left: 0;
        }
        .row-text {
            letter-spacing: 1px;
        }
        .row-wrap-portfolio {
            padding: 0;
            div .row-text-portfolio {
                    letter-spacing: 5px;
                }
        }
    }
`

export const ScrollNavigate = styled(motion.div)`
    display: flex;
    align-items: center;
    position: relative;
    font-size: 3rem;
    font-family: var(--font-family-navigation);
    white-space: nowrap;
    transform: skew(20deg);
    z-index: 1;
    &.lets {
        margin-left: 0.5rem;
        color: var(--clr-red);
        text-shadow: -1px 1px 0 DarkRed,
                    -2px 2px 0 DarkRed,
                    -3px 3px 0 DarkRed,
                    -4px 4px 0 DarkRed;
    }
    &.explore {
        align-self: center;
        color: var(--clr-red);
        text-shadow: -1px 1px 0 DarkRed,
                    -2px 2px 0 DarkRed,
                    -3px 3px 0 DarkRed,
                    -4px 4px 0 DarkRed;
        letter-spacing: 2px; 
        text-transform: uppercase;
        &:hover {
            letter-spacing: 3px;
            transition: .5s;
        }
    }
    ${media.mobile} {
        font-size: 2rem;
        &.explore {
            bottom: 0;
            right: 0;
            font-size: 1.7rem;
        }
    }
`