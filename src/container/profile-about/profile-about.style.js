import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'


export const ProfileContainer = styled.div`
    position: relative;
`

export const ProfileContent = styled(motion.section)`
    position: relative;
    padding: 5% 8%;
    width: 100vw;
    min-height: 100vh;
    ${props => props._diffBg && css`
        background-color: ${props => props.theme.backgroundDiff};
    `}
    ${props => props.noPadding && css`
        padding: 0;
    `}
    .profile-content-wrapper {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        &._column {
            flex-direction: column;
            gap: 3rem;
        }
    }
    ${media.laptop} {
        padding: 3.9% 7%;
        .profile-content-wrapper {
            flex-direction: column;
        }
    }
    ${media.tablet} {
        padding: 2.5% 7%;
        .profile-content-wrapper {
            gap: 3rem;
        }
    }
    ${media.mobile} {
        padding: 1.3% 0;
        .profile-content-wrapper {
            margin-block: 1.5rem;
        }
    }
`

export const PersonalInfo = styled(motion.div)`
    position: relative;
    max-width: fit-content;
    height: min-content;
    background-color: ${props => props.theme.backgroundDiff};
    padding: 2rem;
    overflow: hidden;
    z-index: 5;
    box-shadow: 5px 5px 2px var(--clr-black),
                0 0 2px var(--clr-black);
    .info-wrapper {
        display: flex;
        flex-direction: column;
        .info-title-wrapper {
            display: flex;
            align-items: center;
            width: fit-content;
            .info-title {
                font-size: 13rem;
                font-family: var(--font-family-main);
                font-weight: 600;
                color: ${props => props.theme.textDiff};
                letter-spacing: 0.2rem;
                position: relative;
                &::first-letter {
                    text-transform: uppercase;
                    color: var(--clr-red);
                }
                ${media.tablet} {
                    font-size: 11rem;
                }
                .follow-text {
                    position: absolute;
                    left: 55%;
                    top: 15%;
                    font-size: 2rem;
                    color: ${props => props.theme.textDiff};
                }
            }
        }
    }
    ${media.laptop} {
        padding: 1rem;
    }
    ${media.mobile} {
        max-width: 90%;
        margin-inline: auto;
    }
`

export const Profile = styled(motion.section)`
    position: relative;
    align-self: center;
    max-width: 50%;
    padding: 2rem;
    line-height: 2;
    .profile-title {
        font-size: 2.7rem;
        font-weight: bold;
        font-family: var(--font-family-chinese);
        color: ${props => props.theme.textDiff};
        span {
            color: var(--clr-red);
            text-decoration: line-through;
        }
    }
    .letter-split {
        overflow: hidden;
        span {
            font-size: 1.7rem;
            font-weight: bold;
            font-family: var(--font-family-chinese);
            letter-spacing: 3px;
            color: ${props => props.theme.textDiff};
        }
    }
    ${media.laptop} {
        max-width: 100%;
    }
    ${media.mobile} {
        padding: 0 1rem 1rem;
        
    }
`

export const PersonalDetail = styled(motion.div)`
    width: 100%;
    .name-wrapper {
        width: fit-content;
        font-size: 2.5rem;
        font-weight: 600;
        color: ${props => props.theme.textDiff};
        white-space: nowrap;
        letter-spacing: 0.5 rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        .english-name {
            font-size: 2rem;
            font-family: var(--font-family-main);
            text-transform: uppercase;
        }
        ${media.laptop} {
            flex-direction: column;
            align-items:  start;
        }
        
    }
    .underline {
        display: block;
        width: 15rem;
        height: 0.3rem;
        background-color: var(--clr-red);
        margin-block: 1rem;
        position: relative;
        /* margin-left: 10%; */
    }
    .personal-info {
        list-style: none;
        line-height: 1.2;
        color: ${props => props.theme.textDiff};
        .info-item {
            font-family: var(--font-family-main);
            font-size: 1.6rem;
            font-weight: 600;
            letter-spacing: 3px;
            &::first-letter {
                font-size: 3rem;
            }
            span {
                font-weight: 400;
                font-family: var(--font-family-main);
                white-space: nowrap;
            }
        }
    }
    ${media.tablet} {
        width: 100%;
    }
`

export const SkillContainer = styled(motion.div)`
    width: 90vw;
    height: 100vh;
    background-color: ${props => props.theme.background};
    border: 5px solid #202020;
    border-radius: 30px;
    padding: 3rem;
    margin: auto;
    box-shadow: 5px 5px 2px var(--clr-black),
                        inset 4px 4px 2px var(--clr-black),
                        inset -4px -4px 2px var(--clr-black);
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: fit-content 1fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    grid-template-areas:
        "title sidebar"
        "main main"
        "main main";
    .blanked {
        grid-column: sidebar;
        position: relative;
        width: 100%;
        height: 100%;
        border: 10px double ${props => props.theme.border};
        border-radius: 20px;    
    }
    ${media.laptop} {
        grid-template-columns: 1fr;
        grid-template-rows: min-content auto;
        grid-template-areas:
            "title"
            "main";
        .blanked {
            display: none;
        }
    }
    ${media.mobile} {
        width: 100vw;
        padding: 1rem;
    }
`

export const WhatCanIDo = styled(motion.div)`
    grid-area: title;
    position: relative;
    max-width: 100%;
    height: 100%;
    padding: 2rem 0.5rem;
    text-align: center;
    border: 10px double ${props => props.theme.border};
    border-radius: 20px;
    display: flex;
    place-items: center;
    place-content: center;
    .skill-title {
        font-size: 6rem;
        font-weight: 600;
        font-family: var(--font-family-pagination);
        text-transform: uppercase;
        letter-spacing: 3px;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${props => props.theme.text};
    }
    ${media.laptop} {
        padding: 1rem 0.5rem;
        .skill-title {
            font-size: 4.9rem;
        }
    }
    ${media.tablet} {
        .skill-title {
            font-size: 3.0rem;
        }
    }
    ${media.mobile} {
        .skill-title {
            font-size: 2.5rem;
        }
    }
`

export const Skills = styled(motion.div)`
    grid-area: main;
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-row: auto;
    border: 10px double ${props => props.theme.border};
    border-radius: 20px;
    .skill-wrapper {
        display: flex;
        place-items: center;
        place-content: center;  
        width: 100%;
        box-shadow: 2px 2px 5px ${props => props.theme.border};
        padding: 1rem 2rem;
        .skill-text {
            color: ${props => props.theme.text};
            font-size: var(--step-page-about-skill);
            font-family: var(--font-family-main);
        }
    }
    ${media.laptop} {
        .skill-wrapper .skill-text {
            font-size: 2rem;
        }
    }
    ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        .skill-wrapper {
            padding: 1rem;
            .skill-text {
                font-size: 2rem;
            }
        }
    }
    ${media.mobile} {
        grid-template-columns: 1fr;
        .skill-wrapper {
            margin-inline: auto;
            padding: 0;
        }
    }
`

export const Next = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 20rem;
    background-color: ${props => props.theme.backgroundDiff};
    overflow: hidden;
    .next-text {
        color: ${props => props.theme.textDiff};
        font-size: 5rem;
        font-family: var(--font-family-main);
        font-weight: 600;
        text-transform: uppercase;
        ${media.mobile} {
            font-size: 3.7rem;
        }
    }
`

export const BioHeading = styled.div`
    display: block;
    .bio-heading-wrapper {
        position: relative;
        width: fit-content;
        margin-inline: auto;
        padding-inline: 1rem;
        white-space: nowrap;
        overflow: hidden;
        .bio-heading-text {
            font-size: clamp(2.30rem, calc(1.46rem + 3.24vw), 4.50rem);
            font-weight: 600;
            font-family: var(--font-family-main);
            color: ${props => props.theme.textDiff};
            display: inline-block;
            &.its {
                margin-right: 2rem;
            }
        }
    }
    ${media.tablet} {
        padding-top: 1rem;
    }
    ${media.mobile} {
        padding-top: 3rem;
        .bio-heading-wrapper .bio-heading-text {
            &.its {
                margin-right: 1rem;
            }
        }
    }
`

export const Autobiography = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    gap: 2rem;
    .bio-paragraph-wrapper {
        display: flex;
        flex-direction: column;
        line-height: 2;
        padding: 0 2rem;
        font-family: var(--font-family-chinese);
        font-weight: bold;
        color: ${props => props.theme.textDiff};
        .bio-paragraph-heading {
            font-size: 2.5rem;
            letter-spacing: 5px;
        }
        .bio-paragraph-content {
            font-size: 1.7rem;
            letter-spacing: 3px;
            padding-inline: 2rem;
        }
    }
    
`