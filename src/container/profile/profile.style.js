import styled from 'styled-components'
import { media } from '../../styles/BreakPoint'
import { motion } from 'framer-motion'

export const ProfileContainer = styled.div`
    position: relative;
    inset: 0;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 80px 0 20px 20%;
    overflow: hidden;
    .profile_wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 55% 45%;
        grid-template-rows: 80% 20%;
        padding: 1rem;
        /* grid-template-areas: 
            "section selfie"
            "button selfie"; */
        ${media.laptop} {
            width: 100%;
            grid-template-columns: 1fr;
            grid-template-rows: 40% 50% 10%;
            &.resume-toggleOn {
                grid-template-rows: 90% 10%;
            }
            /* grid-template-areas: 
                "section"
                "selfie"
                "button";*/
        }
        ${media.tablet} {
            grid-template-rows: 50% 40% auto;
            padding: 1rem 0;
        }
    }

`

export const IntroSection = styled(motion.section)`
    /* grid-area: section; */
    grid-column: 1 / 2
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem 3rem;
    border: 2px solid ${props => props.theme.border};
    overflow: hidden;
    .intro_wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 20px;
        color: ${props => props.theme.text};
        font-family: var(--font-family-main);
        letter-spacing: 2px;
        .intro_title {
            font-size: calc(var(--step-profile-content) * 1.5);
            font-weight: 600;
            white-space: nowrap;
            border-bottom: 2px solid ${props => props.theme.border};
        }
        .intro_content {
            font-size: 1.2rem;
            line-height: 2;
        }
        .postscript {
            font-size: 0.9rem
        }
    }
    ${media.laptop} {
        padding: 1rem 2rem;
        transform: translateX(0);
        &.resume-toggleOn {
            display: none;
        }
    }
    ${media.tablet} {
        width: 100%;
        margin: 0 auto;
    }
    ${media.mobile} {
        padding: 2rem 1rem;
    }
`

export const Buttons = styled(motion.div)`
    /* grid-area: button; */
    grid-row: 2 / -1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid ${props => props.theme.border};
    ${media.laptop} {
        grid-row: auto;
    }
`

export const PhotoWrapper = styled(motion.div)`
    grid-row: 1 / -1;
    /* grid-area: selfie; */
    position: relative;
    height: 100%;
    width: 100%;
    border: 2px solid ${props => props.theme.border}; 
    overflow: hidden;   
    .photo {
        height: 100%;
        object-fit: cover;
        transition: opacity 1s;
    }
    ${media.laptop} {
        grid-row: 2 / 3;
        &.resume-toggleOn {
            grid-row: 1 / 2;
        }
    }
`

export const Resume = styled(motion.div)`
    position: absolute;
    inset: 0;
    overflow: hidden;
    .carousel-track {
        position: relative;
        height: 100%;
        .resume {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            z-index: 0;
            &.active {
                opacity: 1;
                z-index: 1;
                transition: opacity .7s ease-in-out;
            }
        }
    }
`
