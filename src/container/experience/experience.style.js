import styled from 'styled-components'
import { media } from '../../styles/BreakPoint'


export const ExpContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 40px);
    padding: 1rem;
    padding-top: 80px;
    overflow: hidden;
    .title-wrapper {
        grid-row-end: 2;
        grid-column-start: 1;
        position: absolute;
        h1 {
            font-size: var(--step-title);
            font-weight: 600;
            font-family: var(--font-family-main);
            letter-spacing: 5px;
            text-transform: uppercase;
            color: ${props => props.theme.text};
            margin: 0;
            text-shadow: 3px 3px 3px grey;
            &::first-letter {
                font-size: calc(var(--step-title) * 1.2);
            }
        }
    }
    ${media.laptop} {
        padding: 60px 0 80px;
    }
    ${media.tablet} {
        .title-wrapper {
            margin-left: 1rem;
            grid-column-start: 1;
        }
    }
    ${media.mobile} {
        padding-block: 40px 80px;
    }
`

export const Root = styled.section`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-margin: 3rem;
    grid-gap: 0 3rem;
    margin: 0 auto;
    ${media.laptop} {
        grid-template-columns: repeat(9, 1fr);
        grid-margin: 1.5rem;
        grid-gap: 0 1.5rem;
    }
    ${media.tablet} {
        grid-template-columns: repeat(7, 1fr);
        grid-margin: 1rem;
        grid-gap: 0 1rem;
    }
`

