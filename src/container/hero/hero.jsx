import React from 'react'
//framer motion
import { motion } from 'framer-motion'
// components
import { AnimeTrigger } from '../../components'
// constants
import { variants } from '../../constants'
// styles
import { Banner, Section, ScrollSign, Row, RowText } from './hero.style'
import { useCursor } from '../../context/cursorContext'



const Hero = ({ setPagination }) => {

    const { setCursorType } = useCursor()

    return (
        <Banner>
            <AnimeTrigger threshold='0.1' delay={0.85}>
                <Section>
                    <div className="wrapper">
                        <Row>
                            <motion.span
                                className='row-text'
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >This is a <span className='portfolio'>portfolio,</span></motion.span>
                        </Row>
                        <Row>
                            <RowText
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >presented by </RowText>
                        </Row>
                        <Row>
                            <RowText
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >A junior development</RowText>
                        </Row>
                        <Row>
                            <RowText
                                variants={variants.inViewVariants.zoomInFromY}
                                transition={{ duration: .5 }}
                            >based in Taichung.</RowText>
                        </Row>
                        <ScrollSign
                            variants={variants.inViewVariants.visibility}
                            transition={{ duration: 1 }}
                            onClick={() => setPagination(1)}
                            onMouseEnter={() => setCursorType('navigate down')}
                            onMouseLeave={setCursorType}
                        >
                            <span className="scroll-sign-text">scroll</span>
                            <div className='scroll-sign-middle'>
                                <span className='scroll-sign-text-middle'>t</span>
                                <span className="scroll-sign">
                                    <motion.span
                                        className="scroll-sign-dot"
                                        variants={variants.inViewVariants.oscillation}
                                    />
                                </span>
                            </div>
                            <span className="scroll-sign-text">discover</span>
                        </ScrollSign>
                    </div>
                </Section>
            </AnimeTrigger>
        </Banner>
    )
}

export default Hero