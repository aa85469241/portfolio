import styled from "styled-components"
import { motion } from "framer-motion"
import { images } from "../../constants"
import { media } from "../../styles/BreakPoint"


export const SortArea = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${images.grid_bg});
        background-position: 0 0;
        background-size: contain;
        mix-blend-mode: multiply;
        opacity: 0.7;
    }
`

export const IntroSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
    line-height: 1.4;
    z-index: 2;
    ${media.laptop} {
        line-height: 1.6;
        padding-top: 6%;
    }
    ${media.tablet} {
        padding: 10% 1rem;
    }
`

export const TopRow = styled(motion.div)`
    display: flex;
    align-items: center;
    .wrapper {
        overflow: hidden;
        .row-text {
            font-size: 6.5rem;
            font-family: var(--font-family-hero);
            text-transform: uppercase;
            letter-spacing: 7px;
            color: ${props => props.theme.text};
        }
    }
    ${media.laptop} {
        flex-direction: column;
    }
    ${media.tablet} {
        .wrapper > .row-text {
            font-size: 2.1rem;
        }
    }
`
export const MiddleRow = styled(motion.div)`
    display: grid;
    grid-template-areas: "card text";
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 5px;
    .wrapper {
        grid-area: text;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        overflow: hidden;
        .row-text {
            position: relative;
            font-size: 4rem;
            font-family: var(--font-family-hero);
            text-transform: uppercase;
            letter-spacing: 3px;
            color: ${props => props.theme.text};
        }
        .left-side-arrow {
            position: relative;
            width: 20rem;
            height: 5px;
            background-color: ${props => props.theme.border};
            &::before {
                content: "";
                position: absolute;
                left: -2rem;
                bottom: 0;
                width: 3rem;
                height: 3rem;
                background-color: ${props => props.theme.border};
                clip-path: polygon(90% 73%, 0 100%, 100% 100%);
            }
        }
    }
    ${media.tablet} {
        grid-template-areas: 
                    "text"
                    "card";
        .wrapper {
            margin: 1rem 0;
            .row-text {font-size: 1.8rem;}
            .left-side-arrow {
                width: 10rem;
            }
        }
    }
`
export const BottomRow = styled(motion.div)`
    margin-top: 1.3rem;
    overflow: hidden;
    .row-text {
        font-size: 5rem;
        font-family: var(--font-family-hero);
        text-transform: uppercase;
        letter-spacing: 7px;
        color: ${props => props.theme.text};
    }
    ${media.tablet} {
        margin-top: 0.5rem;
        .row-text {
            font-size: 2.1rem;
        }
    }
`

export const IDCardContainer = styled(motion.div)`
    position: relative;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: 
        "photo name"
        "photo content";
    background-color: var(--clr-intro-card-bg);
    border: 2px solid var(--clr-black);
    border-radius: 15px;
    box-shadow: 4px 4px 1px var(--clr-black);
    padding: 0 1rem;
    margin-left: 2rem;
    .photo {
        grid-area: photo;
        height: 7rem;
        align-self: center;
    }
    .id-card-name {
        grid-area: name;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        .text {
            font-size: 1.7rem;
            font-weight: bold;
            letter-spacing: 3px;
        }
    }
    .id-card-content {
        grid-area: content;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.8rem 1.3rem;
        text-align: center;
        h2 {
            font-size: 1.5rem;
            letter-spacing: 3px;
            text-decoration: underline;
        }
    }
    ${media.tablet} {
        .photo {
            height: 3.6rem;
        }
        .id-card-name > .text {
            font-size: 1.2rem;
        }
        .id-card-content > .text {
            font-size: 1.1rem;
        }
    }
`

export const CityCardContainer = styled(motion.div)`
    grid-area: card;
    position: relative;
    background-color: var(--clr-intro-card-bg);
    border: 2px solid var(--clr-black);
    border-radius: 15px;
    box-shadow: 4px 4px 1px var(--clr-black);
    padding: 1rem;
    .backdrop {
        height: 9rem;
        object-fit: contain;
    }
    .text {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        font-size: 2.3rem;
        font-family: var(--font-family-hero);
        letter-spacing: 2px;
        white-space: nowrap;
        transform: translateX(-50%);
        opacity: 0.7;
    }
    ${media.tablet} {
        .backdrop {
            height: 6rem;
        }
    }
`

export const ScrollDown = styled(motion.div)`
    position: absolute;
    right: 3%;
    bottom: 3%;
    background-color: ${props => props.theme.background};
    border: 2px solid ${props => props.theme.border};
    border-radius: 50px;
    padding: 1rem;
    box-shadow: 1px 3px 1px ${props => props.theme.box_shadow};
    &:active {
        transform: translate(0px, 3px);
        box-shadow: 0px 0px 1px ${props => props.theme.box_shadow};
    }
    .arrow-down {
        font-size: 2.5rem;
        color: ${props => props.theme.text};
    }
    ${media.tablet} {
        bottom: 7%;
        padding: 0.5rem;
        .arrow-down {font-size: 1.9rem};
    }
`