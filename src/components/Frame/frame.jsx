import React from 'react'
import styled from 'styled-components'
import { Bar } from '../../styles/GlobalStyles'
import { AnimeTrigger } from '../../components'

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

const variants = {
    scaleX: {
        hidden: { width: 0 },
        visible: { width: '100%', transition: { duration: 1.5 } }
    },
    scaleY: {
        hidden: { height: 0 },
        visible: { height: '100%', transition: { duration: 1.5 } }
    }
}

export const Frame = () => {
    return (
        <FrameContainer>
            <AnimeTrigger threshold='0.5'>
                <div className="inner-frame">
                    <Bar top variants={variants.scaleX} />
                    <Bar left variants={variants.scaleY} />
                    <Bar right variants={variants.scaleY} />
                    <Bar bottom variants={variants.scaleX} />
                </div>
            </AnimeTrigger>
        </FrameContainer>
    )
}