import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// framer motion
import { AnimatePresence, motion, useCycle } from 'framer-motion'
// components
import { AnimeTrigger, Button } from '../../components'
// constant
import { images } from '../../constants'
// variants
import { inViewVariants } from '../../variants'
// context
import { useCursor } from '../../context/cursorContext'
// hooks
import { useMediaQuery } from '../../hooks/useMediaQuery'
// styles
import {
    ProfileContainer,
    IntroSection,
    PhotoWrapper,
    Buttons,
    Resume,
} from './profile.style'



const Profile = ({ onDisplay, setOnDisplay }) => {

    const { setCursorType } = useCursor()
    const [display, toggle] = useCycle(false, true)

    // expand resume
    const isMatch = useMediaQuery('(max-width: 992px)')
    const handleOnDisplay = () => {
        if (!isMatch && !onDisplay) setOnDisplay(true)
    }
    // slide
    const [current, setCurrent] = useState(0)

    const handleSlide = () => {
        if (current === 0) setCurrent(current + 1)
        else setCurrent(0)
    }

    return (
        <ProfileContainer name='about'>
            <AnimeTrigger threshold='0.5' delay={0.2}>
                <div className={`profile_wrapper ${display && 'resume-toggleOn'}`}>
                    <IntroSection
                        className={`${display && 'resume-toggleOn'}`}
                        variants={inViewVariants.zoomInFromX}
                        transition={{ duration: .5 }}
                    >
                        <motion.div
                            className='intro_wrapper'
                            custom={.1}
                            variants={inViewVariants.stagger}
                        >
                            <motion.h3 className='intro_title'
                                variants={inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >What about me</motion.h3>
                            <motion.p
                                className="intro_content"
                                variants={inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >
                                Like a man walks into a mysterious place,
                                feel novel and strange, but he has deeply
                                appealed to it.
                            </motion.p>
                            <motion.span
                                className='postscript'
                                variants={inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >*Click resume on right hand side could toggle it on.</motion.span>
                        </motion.div>
                    </IntroSection>
                    <Buttons
                        className="button_wrapper"
                        variants={inViewVariants.zoomInFromY}
                        transition={{ duration: .5 }}>
                        <Button
                            btnType={`__rectangle ${display ? 'active' : ''}`}
                            onMouseEnter={() => setCursorType('pointer')}
                            onMouseLeave={setCursorType}
                            onClick={toggle}
                        >
                            {display ? 'close' : 'see'} my resume
                        </Button>
                        {display &&
                            <Button
                                btnType={'__square'}
                                onClick={handleSlide}
                                onMouseEnter={() => setCursorType('pointer')}
                                onMouseLeave={setCursorType}
                            >
                                <FaPlay />
                            </Button>}
                        <Link
                            to='./about'
                            onMouseEnter={() => setCursorType('navigate')}
                            onMouseLeave={setCursorType}
                        >
                            <Button btnType='__rectangle'>see more details</Button>
                        </Link>
                    </Buttons>
                    <PhotoWrapper
                        className={`${display && 'resume-toggleOn'}`}
                        variants={inViewVariants.zoomInFromXVerse}
                        transition={{ duration: .5 }}
                    >
                        <motion.img
                            src={images.selfie}
                            alt='selfie'
                            className="photo"
                            style={{ opacity: `${display ? 0 : 1}` }}
                            variants={inViewVariants.photo}
                            transition={{ duration: .7 }}
                        />
                        <AnimatePresence>
                            {display === true &&
                                <Resume
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    onClick={handleOnDisplay}
                                >
                                    <div className='carousel-track'>
                                        {images.resume.map((page, index) =>
                                            <motion.img
                                                key={'resume-page-' + index}
                                                src={page}
                                                alt={'resume-page-' + index}
                                                className={`resume ${current === index && 'active'}`}
                                            />
                                        )}
                                    </div>
                                </Resume>}
                        </AnimatePresence>
                    </PhotoWrapper>
                </div>
            </AnimeTrigger>
        </ProfileContainer>
    )
}

export default Profile