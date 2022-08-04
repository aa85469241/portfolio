import React from 'react'
import { Link as Scroll } from 'react-scroll'
// framer motion
import { motion } from 'framer-motion'
// components
import { AnimeTrigger, SplitLetters } from '../../components'
// constants
import { variants } from '../../constants'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import { Banner, Section, Row, ScrollNavigate } from './hero.style'



const Hero = () => {

    const { setCursorType } = useCursor()

    return (
        <Banner name='home'>
            <AnimeTrigger threshold='0.1' delay={0.85}>
                <Section>
                    <motion.div className="wrapper" custom={0.1} variants={variants.inViewVariants.stagger}>
                        <Row>
                            <motion.div
                                className="row-wrap"
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >
                                <motion.span className='row-text'
                                >Hi, my name is</motion.span>
                            </motion.div>
                        </Row>
                        <Row>
                            <motion.div
                                className="row-wrap"
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >
                                <motion.span
                                    className='row-text'
                                >Chang Cheng Liou</motion.span>
                            </motion.div>
                        </Row>
                        <Row>
                            <motion.div
                                className="row-wrap"
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >
                                <motion.span
                                    className='row-text'
                                >Based in Taichung.</motion.span>
                            </motion.div>
                        </Row>
                        <Row center custom={0.1} variants={variants.inViewVariants.stagger}>
                            <div className='row-wrap-portfolio'>
                                <ScrollNavigate
                                    className="scroll-navigate lets"
                                    variants={variants.inViewVariants.visibility}
                                    transition={{ duration: .3, delay: 1.7 }}
                                >Let's</ScrollNavigate>
                                <div className="split-letters-flex">
                                    <SplitLetters
                                        text='portfolio'
                                        textClass='row-text-portfolio'
                                        variants={variants.inViewVariants.zoomInFromY}
                                        transition={{ duration: .5 }}
                                    />
                                </div>
                                <ScrollNavigate
                                    className="scroll-navigate explore"
                                    variants={variants.inViewVariants.visibility}
                                    transition={{ duration: .3, delay: 1.7 }}
                                    onMouseEnter={() => setCursorType('navigate down')}
                                    onMouseLeave={setCursorType}
                                >
                                    <Scroll
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-25}
                                    >
                                        start to explore
                                    </Scroll>
                                </ScrollNavigate>
                            </div>
                        </Row>
                    </motion.div>
                </Section>
            </AnimeTrigger>
        </Banner>
    )
}

export default Hero