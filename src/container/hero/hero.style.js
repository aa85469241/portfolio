import styled from 'styled-components'
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
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
`