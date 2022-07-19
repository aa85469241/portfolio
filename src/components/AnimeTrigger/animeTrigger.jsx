import React, { useEffect } from 'react'
// useInView
import { useInView } from 'react-intersection-observer'
// framer motion
import { motion, useAnimation } from 'framer-motion'

export const AnimeTrigger = ({ threshold, rootMargin, delay, variants, children }) => {

    const [ref, inView] = useInView({
        threshold: threshold,
        rootMargin: rootMargin,
    })
    const controls = useAnimation()
    const delayTimer = delay * 1000

    useEffect(() => {
        setTimeout(() => {
            if (inView) {
                controls.start('visible')
            }
        }, delayTimer)
    })

    return (
        <motion.span
            className='animate-trigger'
            style={{ width: '100%', height: '100%' }}
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.span>
    )
}