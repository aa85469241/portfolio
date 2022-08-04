import React from 'react'
// style
import { Dot, Outline } from './cursor.style'
//hook
import { useMousePosition } from '../../hooks/useMousePosition'
// context
import { useCursor } from '../../context/cursorContext'


export const Cursor = ({ dotColor, outlineColor }) => {

    const { mouseX, mouseY } = useMousePosition()
    // context
    const { cursorType } = useCursor()

    return (
        <>
            <Dot
                dotColor={dotColor}
                style={{ top: `${mouseY}px`, left: `${mouseX}px` }}
                className={`${!!cursorType ? cursorType : ''}`} />
            <Outline
                outlineColor={outlineColor}
                style={{ top: `${mouseY}px`, left: `${mouseX}px` }}
                className={`${!!cursorType ? cursorType : ''}`}
            />
        </>
    )
}

