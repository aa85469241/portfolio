import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { variants, data } from '../../constants'
import { media } from '../../styles/BreakPoint'

const SvgContainer = styled(motion.div)`
    grid-row-end: -3;
    display: block;
    width: 90%;
    margin-inline: auto;
    svg {
        width: 100%;
        fill: none;
        path {
            stroke: ${props => props.theme.text};
            stroke-width: 2px;
            fill: none;
        }
    }
    ${media.laptop} {
        grid-row: 4;
    }
    ${media.mobile} {
        width: 100%;
        grid-row: 6;
    }
`

const Svg = ({ children }) => {
    return (
        <svg viewBox="0 0 720 50" xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    )
}

export const Mail = () => {
    return (
        <SvgContainer>
            <Svg>
                {data.mailSvgPath.map((path, index) =>
                    <motion.path key={index} d={path.d} variants={variants.contactVariants.svgPath} />
                )}
            </Svg>
        </SvgContainer>
    )
}