import { useState, useEffect } from 'react'


export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouse = (event) => {
            const { clientX, clientY } = event
            setMousePosition({ x: clientX, y: clientY })
        }

        document.addEventListener('mousemove', onMouse)

        return () => {
            document.removeEventListener('mousemove', onMouse)
        }
    }, [])

    return mousePosition
}