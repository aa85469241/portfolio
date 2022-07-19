import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'
import { images } from '../../constants'

export const Banner = styled(motion.div)`
    position: relative;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    z-index: 2;
    .banner-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        ${media.laptop} {
            gap: 6rem;
        }
    }
`

export const ScrollSign = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 60%;
    width: fit-content;
    display: grid;
    .scroller {
        width: 2px;
        height: 80px;
        background-color: ${props => props.theme.border};
        justify-self: center;
    }
    .scroller-text {
        color: ${props => props.theme.text};
        font-family: var(--font-family-main);
        font-size: 1.2rem;
        letter-spacing: 2px;
    }
`

export const Selfie = styled(motion.div)`
    position: absolute;
    right: 0;
    height: 100%;
    aspect-ratio: 7 / 9;
    background-image: url(${images.selfieBanner});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.75;
    -webkit-mask: url(${images.paintblob});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    -webkit-mask-position:auto;
`

export const BannerRowTop = styled.div`
    display: flex;
    margin-top: 5%;
    margin-left: 15%;
    overflow: hidden;
    .row-top-wrapper {
        display: flex;
        flex-direction: column;
        .header-text{
            position: relative;
            width: fit-content;
            font-size: 5rem;
            font-family: var(--font-family-navigation);
            text-transform: uppercase;
            letter-spacing: 5px;
            color: ${props => props.theme.text};
            margin-inline: 0.4rem;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: ${props => props.theme.text};
            &._or {
                align-self: center;
                font-size: 3rem;
                -webkit-text-fill-color: ${props => props.theme.text};
                -webkit-text-stroke: none;
                ${media.tablet} {
                    align-self: start;
                }
            }
            &._return {
                align-self: end;
                overflow: hidden;
                transition: .5s ease-in-out;
                ${media.tablet} {
                    align-self: start;
                }
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 10px;
                    width: 100%;
                    height: 3px;
                    background-color: ${props => props.theme.text};
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: 100%;
                    bottom: 10px;
                    width: 100%;
                    height: 3px;
                    background-color: ${props => props.theme.text};
                }
                &:hover {
                    -webkit-text-fill-color: ${props => props.theme.text};
                    /* filter: drop-shadow(0 0 2px ${props => props.theme.text}); */
                    &::after {
                        animation: underline1 .3s ease-in forwards;
                    }
                    &::before {
                        animation: underline2 .3s linear forwards;
                        animation-delay: .5s;
                    }
                }
                @keyframes underline1 {
                    to {left: -100%};
                }
                @keyframes underline2 {
                    to {left: 0};
                }
            }
        }
    }
    ${media.mobile} {
        margin-top: 15%;
        margin-left: 1rem;
    }
`

export const Marquee = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    .marquee-inner {
        position: relative;
        width: fit-content;
        display: flex;
        animation: rolling 10s linear infinite;
        animation-play-state: paused;
        transform: translate3d(-25%, 0, 0);
        .row-text-wrapper {
            position: relative;
            display: inline-block;
            .row-text {
                font-size: 10rem;
                font-family: var(--font-family-navigation);
                white-space: nowrap;
                padding-inline: 8.5vw;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: ${props => props.theme.text};
                &._fill {
                    -webkit-text-fill-color: ${props => props.theme.text};
            }
        }
    }
    @keyframes rolling {
        0% {transform: translate3d(-25%, 0, 0);}
        100% {transform: translate3d(-50%, 0, 0);}
    }
    ${media.laptop} {
        .marquee-inner .row-text-wrapper .row-text {
            font-size: 3.8rem;
        }
    }
}
`

export const BannerRowBottom = styled.div`
    display: flex;
    overflow: hidden;
    .arrow-down-wrapper {
        margin-inline: auto 10%;
        .arrow-down {
            width: 100px;
        }
    }
`