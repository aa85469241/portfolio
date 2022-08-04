import styled from "styled-components";
import { motion } from 'framer-motion'
import { images } from "../../../constants";
import { media } from '../../../styles/BreakPoint'

export const SlickCarousel = styled.div`
    position: relative;
    grid-column: 1 / -1;
    grid-row-end: -1;
    height: 70vh;
    border: 2px solid ${props => props.theme.border};
    overflow: hidden;
    .slick-slider {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: grid;
        grid-template-rows: 1fr 1rem;
        background-image: url(${images.lines_pattern});
        box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.6),
                    inset -1px -1px 1px rgba(0, 0, 0, 0.6);
        .slick-list {
            border: 2px solid ${props => props.theme.border};
            background-color: ${props => props.theme.background};
        }
        .slick-dots {
            position: relative;
            bottom: 0;
            height: 2rem;
            display: flex;
            align-items: center;
            z-index: 3;
            li {
                width: 100%;
                &.slick-active {
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        background-color: silver;
                        animation: dot-fill 1s linear forwards;
                    }
                    @keyframes dot-fill {
                        to {width: 100%;}
                    }
                }
            }
            
        }
    }
`

export const SlideContainer = styled(motion.div)`
    position: relative;
    height: calc(70vh - 3rem);
    border-radius: 20px;
    padding: 1rem;
    transform: scale(0.9);
    .slide-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: 2px solid ${props => props.theme.border};
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
        box-shadow: 2px 2px 3px ${props => props.theme.border};
        .slide-date, 
        .slide-title{
            font-size: 1.7rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        .slide-list {
            list-style: numbers;
            line-height: 2;
            padding: 0.8rem 1.8rem;
            .slide-content {
                font-size: 1.5rem;
            }
            ${media.mobile} {
                line-height: 1.25;
                .slide-content {
                    font-size: 1.2rem;
                }
            }
        }
        ${media.mobile} {
            .slide-date, 
            .slide-title{
                font-size: 1.3rem;
            }
        }
    }
`

export const OnBoard = styled(motion.div)`
    position: relative;
    height: calc(70vh - 3rem);
    background-image: url(${images.dashedBoard});
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img {
        filter: drop-shadow(5px 5px 2px var(--clr-black));
    }
    span {
        position: absolute;
        bottom: 10%;
        background-color: ${props => props.theme.background};
        padding: 0.3rem;
        font-size: 1rem;
    }
`

export const Arrow = styled.div`
    position: absolute;
    top: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 3px;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.background};
    z-index: 5;
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 102%;
        width: 10px;
        height: 99%;
        background-color: var(--clr-gray);
        border: 2px solid ${props => props.theme.border};
        transform: skewY(45deg);
    }
    &::after {
        content: '';
        position: absolute;
        top: 102%;
        left: 5px;
        width: 100%;
        height: 10px;
        background-color: var(--clr-gray);  
        border: 2px solid ${props => props.theme.border};
        transform: skewX(45deg);
    }
    &:hover {
        transform: scale(1.1);
        transition: .3s ease-out;
    }
    &:active {
        transform: scale(0.9);
        transition: .1s ease-out;
    }
    &.prev {
        left: 20px;
    }
    &.next {
        right: 20px;
    }
    ${media.mobile} {
        transform: scale(0.7);
        &.prev {
            left: 5px;
        }
        &.next {
            right: 5px;
        }
        &:hover {
        transform: scale(0.8);
        transition: .3s ease-out;
        }
        &:active {
            transform: scale(0.8);
            transition: .1s ease-out;
        }
    }
`

export const Paging = styled(motion.div)`
    position: relative;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
`