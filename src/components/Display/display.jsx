import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// constant
import { images } from '../../constants'
import { useWindowSize } from '../../hooks/useWindowSize'

const DisplayContainer = styled(motion.div)`
    position: fixed;
    inset: 0;
    background-color: var(--clr-bg-light);
    padding: 2rem;
    z-index: 999;
    .display-wrapper {
        display:flex;
        justify-content: space-evenly;
        height: 100%;
        .resume-expanded {
            height: 100%;
            box-shadow: 5px 5px 2px var(--clr-black);
        }
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 80px;
        background-color: var(--clr-wood);
        border: none;
        border-bottom-left-radius: 20px;
        font-size: 1.5rem;
        font-family: var(--font-family-main);
    }
`

const variants = {
    stagger: {
        show: { transition: { staggerChildren: .2 } }
    },
    container: {
        show: { x: 0, display: 'block', transition: { duration: .5, when: 'beforeChildren' } },
        hidden: {
            x: '-100vw',
            display: 'none',
            transition: {
                x: { duration: 0.5 },
                display: { delay: 0.6 }
            }
        }
    },
    paper: {
        show: { x: [100, 0], y: [100, 0], opacity: 1, scale: [1.5, 1], rotate: [15, 0] },
        hidden: { opacity: 0 }
    }
}

export const Display = ({ onDisplay, setOnDisplay }) => {

    const [width] = useWindowSize()

    useEffect(() => {
        if (width < 992) setOnDisplay(false)
    })

    return (
        <DisplayContainer
            initial={false}
            animate={onDisplay ? 'show' : 'hidden'}
            variants={variants.container}
        >
            <motion.div className="display-wrapper" variants={variants.stagger}>
                <motion.img
                    src={images.resume[0]}
                    alt="resume-page-1"
                    className="resume-expanded"
                    variants={variants.paper}
                />
                <motion.img
                    src={images.resume[1]}
                    alt="resume-page-2"
                    className="resume-expanded"
                    variants={variants.paper}
                />
            </motion.div>
            <button onClick={() => setOnDisplay(false)}>back</button>
        </DisplayContainer >
    )
}