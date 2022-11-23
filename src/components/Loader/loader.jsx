import React, { useState } from 'react'
import { motion } from 'framer-motion'
// variants
import { loaderVariants } from "../../variants"
// styles
import { LoaderOverlay, LoaderTexts, LettersContainer, Loading } from './loader.style'


const Letters = ({ letters, onAnimationComplete }) => {
    return (
        <LettersContainer
            variants={{
                animate: { transition: { staggerChildren: 0.3 } },
                exit: { opacity: 0 }
            }}>
            <motion.span
                className='backdrop'
                variants={{ animate: { height: '100%', transition: { delay: 3.5, duration: .7 } } }}
                onAnimationComplete={onAnimationComplete}
            />
            {[...letters].map((letter, index) =>
                <motion.div
                    className="loader-text-wrap"
                    key={'letter' + index}
                    variants={loaderVariants.portfolio}>
                    <motion.span className="loader-text">{letter}</motion.span>
                </motion.div>
            )}
        </LettersContainer>
    )
}


export const Loader = ({ setIsLoading }) => {

    const [onLoading, setLoading] = useState(true)

    const onAnimationComplete = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1100)
    }

    return (
        <>
            <LoaderOverlay initial={false} exit='exit'>
                <LoaderTexts
                    initial='initial'
                    animate='animate'
                    exit='exit'
                >
                    <Loading
                        variants={loaderVariants.loadingFinished}
                        onAnimationComplete={() => setLoading(false)}
                    >
                        <motion.span className='loading-text' variants={loaderVariants.loadingText}>Loading...</motion.span>
                        <motion.span className="loading-bar-track" variants={loaderVariants.loadingText}>
                            <motion.span
                                className="loading-bar-thumb"
                                variants={loaderVariants.loadingThumb}
                            >
                            </motion.span>
                        </motion.span>
                    </Loading>
                    {!onLoading && <Letters letters='portfolio' onAnimationComplete={onAnimationComplete} />}
                </LoaderTexts>
            </LoaderOverlay>
        </>
    )
}
