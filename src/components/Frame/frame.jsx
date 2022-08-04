import React from 'react'
import styled from 'styled-components'
import { Bar } from '../../styles/GlobalStyles'

const FrameContainer = styled.div`
    position: fixed;
    inset: 0;
    padding: 20px;
    .inner-frame {
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const Frame = () => {
    return (
        <FrameContainer>
            <div className="inner-frame">
                <Bar top />
                <Bar left />
                <Bar right />
                <Bar bottom />
            </div>
        </FrameContainer>
    )
}