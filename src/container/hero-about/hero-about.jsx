import React, { useRef } from 'react'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// constants
import { profileVariants } from '../../constants'
// components
import { AnimeTrigger } from '../../components'
// context
import { useCursor } from '../../context/cursorContext'
// hooks
import useScrollElement from '../../hooks/useScrollElement'
// styles
import {
    Banner,
    BannerRowTop,
    Marquee,
    ScrollSign,
    Selfie,
}
    from './hero-about.style'

const RowText = ({ firstText, lastText, variants }) => {
    return (
        <motion.span className='row-text-wrapper' variants={variants}>
            <span className="row-text _fill">{firstText}</span>
            <span className="row-text">{lastText}</span>
        </motion.span>
    )
}

const AboutHero = () => {

    const navigate = useNavigate()
    const { setCursorType } = useCursor()

    const scrollerRef = useRef(null)
    const { scrollY } = useViewportScroll()
    const [initialPosition, finalPosition] = useScrollElement(scrollerRef)
    const reduce = useTransform(scrollY, [-finalPosition, -initialPosition / 3], [1, 0])
    const opacity = useSpring(reduce, { stiffness: 200, damping: 20 })

    return (
        <Banner ref={scrollerRef}>
            <AnimeTrigger threshold='0.5'>
                <div className="banner-wrapper">
                    <Selfie variants={profileVariants.hero.selfie} />
                    <BannerRowTop variants={{ visible: { transition: { staggerChildren: .3 } } }}>
                        <div className="row-top-wrapper">
                            <motion.div className='header-text _about' variants={profileVariants.hero.rowTopText}>
                                watch more
                                <span className="scroll-down-button" />
                            </motion.div>
                            <motion.div className="header-text _or" variants={profileVariants.hero.rowTopText}>or</motion.div>
                            <motion.div
                                className="header-text _return"
                                onClick={() => navigate('/')}
                                onMouseEnter={() => setCursorType('navigate')}
                                onMouseLeave={setCursorType}
                                variants={profileVariants.hero.rowTopText}>Return</motion.div>
                        </div>
                    </BannerRowTop>
                    <Marquee>
                        <motion.div className={`marquee-inner`} variants={profileVariants.hero.marqueePlay}>
                            <RowText firstText={'Who am I ? '} lastText={'Its all below.'} disabled />
                            <RowText
                                firstText={'Who am I ? '}
                                lastText={'Its all below.'}
                                variants={profileVariants.hero.marqueeText}
                            />
                            <RowText firstText={'Who am I ? '} lastText={'Its all below.'} disabled />
                            <RowText firstText={'Who am I ? '} lastText={'Its all below.'} disabled />
                        </motion.div>
                    </Marquee>
                    <ScrollSign style={{ opacity: opacity }} variants={profileVariants.hero.scrollSign}>
                        <span className="scroller" />
                        <p className="scroller-text">scroll</p>
                    </ScrollSign>
                </div>
            </AnimeTrigger>
        </Banner >
    )
}

export default AboutHero
