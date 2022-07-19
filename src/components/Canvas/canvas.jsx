import React, { useRef, useEffect } from 'react'


export const Canvas = () => {

    const canvasRef = useRef(null)
    let frame = 0
    const patternRefreshInterval = 3

    useEffect(() => {
        const canvas = canvasRef.current;
        let ctx
        // canvas size
        const w = canvas.width = window.innerWidth
        const h = canvas.height = window.innerHeight

        function update() {
            
        }

        function draw() {
            ctx.clearRect(0, 0, w, h)

            ctx.fillStyle = ctx.createPattern(canvas, 'repeat');
            ctx.fillRect(0, 0, w, h)
        }

        function loop() {
            const shouldDraw = ++frame % patternRefreshInterval === 0
            if (shouldDraw) {
                draw()
                update()
            }
            requestAnimationFrame(loop)
        }
        loop()
    })

    return (
        <canvas
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
            }}
            ref={canvasRef}
        ></canvas>
    )
}