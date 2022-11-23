import React from 'react'
import { motion } from 'framer-motion'
// constants
import { inViewVariants } from '../../variants'
// components   
import { AnimeTrigger, FramerScroll, SlickSlider } from '../../components'
// hooks
import { useMediaQuery } from '../../hooks/useMediaQuery'
// styles
import {
    ExpContainer,
    Root,
} from './experience.style'


const Experience = () => {

    const isMatch = useMediaQuery('(max-width: 1200px)')

    return (
        <ExpContainer name='experiences'>
            <AnimeTrigger threshold='0.5'>
                <Root>
                    <motion.div
                        className="title-wrapper"
                        variants={inViewVariants.zoomInFromX}
                        transition={{ duration: .5 }}
                    >
                        <motion.h1 className="experience-title">Experiences</motion.h1>
                    </motion.div>
                    {!isMatch ? <FramerScroll /> : <SlickSlider />}
                </Root>
            </AnimeTrigger>
        </ExpContainer>
    )
}

export default Experience