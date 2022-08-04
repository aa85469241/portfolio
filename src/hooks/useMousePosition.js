import { useState, useEffect } from 'react'


export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 })

    useEffect(() => {
        const onMouse = (event) => {
            const { clientX, clientY } = event
            setMousePosition({ mouseX: clientX, mouseY: clientY })
        }

        document.addEventListener('mousemove', onMouse)

        return () => {
            document.removeEventListener('mousemove', onMouse)
        }
    })

    return mousePosition
}