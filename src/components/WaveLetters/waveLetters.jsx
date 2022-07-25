import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../styles/BreakPoint'

const LetterContainer = styled(motion.div)`
    max-height: 2.3rem;
    display: flex;
    gap: 3px;
    overflow: hidden;
    ${media.tablet} {
        max-height: 2rem;
    }
`

const LetterWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    span {
        color: ${props => props.theme.text};
        font-size: 30px;
        text-decoration: underline;
        &:nth-of-type(2) {
            color: var(--clr-red);
            text-decoration: underline red;
        }
        ${media.tablet} {
            font-size: 25px;
        }
    }
`

export const WaveLetters = ({ letters, onClick }) => {

    return (
        <LetterContainer
            initial={false}
            whileHover='hovered'
            variants={{ hovered: { transition: { staggerChildren: .03 } } }}
            onClick={onClick}
        >
            {[...letters].map((letter, index) =>
                <LetterWrapper key={index} variants={{ hovered: { y: '-100%' } }}>
                    <motion.span>{letter}</motion.span>
                    <motion.span>{letter}</motion.span>
                </LetterWrapper>
            )}
        </LetterContainer>
    )
}
