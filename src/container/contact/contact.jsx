import React, { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
// framer motion
import { motion, useAnimation } from 'framer-motion'
// react interaction observer
import { useInView } from 'react-intersection-observer'
// components
import { Button, Mail, WaveLetters } from '../../components'
// constant
import { images, variants } from '../../constants'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import { ContactContainer, ContactSection, ContactInfo, Buttons, BackToTop } from './contact.style'


const Contact = () => {

    const { setCursorType } = useCursor()

    const contactControl = useAnimation()

    // useInView
    const [ref, inView] = useInView({ threshold: 0.5 })

    useEffect(() => {
        if (inView) contactControl.start('appear')
    }, [contactControl, inView])

    const showInformation = () => contactControl.start('showInfo')
    const hideInformation = () => contactControl.start('hideInfo')

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <ContactContainer ref={ref} name='contact'>
            <ContactSection initial='disappear' animate={contactControl} variants={{ appear: { transition: { staggerChildren: .2 } } }}>
                <div className='leading-text-wrapper'>
                    <motion.span
                        className="contact-leading-text"
                        variants={variants.contactVariants.leadingText}
                    >
                        Thanks for your patience reading my portfolio.
                        If you really love this website and wanna talk to me,
                        please press the button below.
                    </motion.span>
                </div>
                <ContactInfo initial='hideInfo' animate={contactControl} variants={variants.contactVariants.zIndex}>
                    <Mail />
                    <motion.span className="contact-number" variants={variants.contactVariants.textFall}>0988207525</motion.span>
                    <motion.img src={images.crack} alt="crack" className="crack" variants={variants.contactVariants.crack} />
                    <motion.svg
                        className='close-button'
                        viewBox="0 0 830 152"
                        onClick={hideInformation}
                        onMouseEnter={() => setCursorType('pointer')}
                        onMouseLeave={setCursorType}
                    >
                        <motion.path
                            variants={variants.contactVariants.svgPath}
                            d="M379.293 111.004L450.004 40.2929M380.707 40.2929L451.418 111.004M0 76H300M299.5 151V1M300 0.5H340M300 150.5H340M830 76H530M530.5 151V1M530 0.5H490M530 150.5H490M490 76C490 117.421 456.421 151 415 151C373.579 151 340 117.421 340 76C340 34.5786 373.579 1 415 1C456.421 1 490 34.5786 490 76Z" stroke="black" />
                    </motion.svg>
                </ContactInfo>
                <Buttons>
                    <Button
                        btnType='__circle'
                        onClick={showInformation}
                        onMouseEnter={() => setCursorType('pointer')}
                        onMouseLeave={setCursorType}
                        variants={variants.contactVariants.contactButton}
                    >Contact me</Button>
                </Buttons>
            </ContactSection>
            <BackToTop
                variants={variants.contactVariants.backToTop}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={setCursorType}
                onClick={scrollToTop}
            >
                <span className="or">or you wanna watch again, then</span>
                <WaveLetters
                    letters={'back  to  top'}
                    className='back-to-top'
                />
            </BackToTop>
        </ContactContainer >
    )
}

export default Contact
