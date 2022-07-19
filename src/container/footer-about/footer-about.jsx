import React, { useEffect, useRef, useState } from 'react'
// react-icons
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { BsArrowUp, BsArrowReturnLeft } from 'react-icons/bs'
// framer-motion
import { motion } from 'framer-motion'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import { Footer, FooterSection, CopyRight, Row, ClipPath, Buttons, ContactInfo } from './footer-about.style'


const variants = {
    stagger: {
        initial: (sec) => ({ transition: { staggerChildren: .1 * sec, staggerDirection: -1 } }),
        animate: { transition: { staggerChildren: .1 } }
    },
    showVertical: {
        initial: { y: 250 },
        animate: { y: 0 }
    },
    clip: {
        initial: { clipPath: 'ellipse(50% 10% at 50% 100%)', transition: { when: 'afterChildren' } },
        animate: { clipPath: 'ellipse(100% 100% at 50% 100%)', transition: { when: 'beforeChildren' } }
    },
    footerSection: {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    }
}


const AboutFooter = () => {

    const ref = useRef(null)
    const [isBottom, setIsBottom] = useState(false)
    const { setCursorType } = useCursor()

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const onReachBottom = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = parseInt(window.scrollY)

        if (scrolled > scrollable - 10) {
            setIsBottom(true)
        } else {
            setIsBottom(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onReachBottom)

        return () => window.removeEventListener('scroll', onReachBottom)
    })


    return (
        <Footer
            className='footer-container'
            ref={ref}
            initial='initial'
            animate={isBottom ? 'animate' : 'initial'}
        >
            <ClipPath variants={variants.clip} />
            <FooterSection
                className="footer-wrapper"
                variants={variants.footerSection}
            >
                <Row>
                    <Buttons
                        className="buttons"
                        variants={{ animate: { transition: { staggerChildren: .18 } } }}>
                        <motion.div
                            className="back-to-top"
                            onClick={backToTop}
                            variants={variants.showVertical}
                            onMouseEnter={() => setCursorType('pointer')}
                            onMouseLeave={setCursorType}
                        >
                            <BsArrowUp />Back to top
                        </motion.div>
                        <motion.div
                            className="home"
                            variants={variants.showVertical}
                            onMouseEnter={() => setCursorType('navigate')}
                            onMouseLeave={setCursorType}
                        >
                            <BsArrowReturnLeft />
                            <a href='/'>Home</a>
                        </motion.div>
                    </Buttons>
                    <ContactInfo className="contact" custom={0} variants={variants.stagger}>
                        <span
                            className='phone'
                            onMouseEnter={() => setCursorType('pointer')}
                            onMouseLeave={setCursorType}
                        >
                            <a href="tel:+0988207525">Call me</a>
                        </span>
                        <span>or</span>
                        <span
                            className='mail'
                            onMouseEnter={() => setCursorType('pointer')}
                            onMouseLeave={setCursorType}
                        >
                            <a href="mailto:defghl7563000@gmail.com">Mail me</a>
                        </span>
                    </ContactInfo>
                </Row>
            </FooterSection>
            <CopyRight>
                <AiOutlineCopyrightCircle />
                <span className="copy-right-reserved">2022 Portfolio. Made by Chang-Cheng Liou.</span>
            </CopyRight>
        </Footer>
    )
}

export default AboutFooter