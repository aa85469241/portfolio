import React from 'react'
// style
import { Dot, Outline } from './cursor.style'
//hook
import { useMousePosition } from '../../hooks/useMousePosition'
// context
import { useCursor } from '../../context/cursorContext'


export const Cursor = ({ dotColor, outlineColor }) => {

    const { x, y } = useMousePosition()
    // context
    const { cursorType } = useCursor()

    return (
        <>
            <Dot
                dotColor={dotColor}
                style={{ top: `${y}px`, left: `${x}px` }}
                className={`${!!cursorType ? cursorType : ''}`} />
            <Outline
                outlineColor={outlineColor}
                style={{ top: `${y}px`, left: `${x}px` }}
                className={`${!!cursorType ? cursorType : ''}`}
            />
        </>
    )
}

