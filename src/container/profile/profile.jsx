import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// framer motion
import { AnimatePresence, AnimateSharedLayout, motion, useCycle } from 'framer-motion'
// components
import { AnimeTrigger, Button } from '../../components'
// constant
import { images, variants } from '../../constants'
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
    Overlay,
} from './profile.style'



const Profile = () => {

    const { setCursorType } = useCursor()

    // resume toggle
    const [display, toggle] = useCycle(false, true)
    const [index, setIndex] = useState(false)
    const isMatch = useMediaQuery("(min-width: 480px)")

    const handleResumeToggle = (page) => {
        if (isMatch === true && index === false) setIndex(page);
        else return;
    }
    // slide
    const [current, setCurrent] = useState(0)

    const handleSlide = () => {
        if (current === 0) setCurrent(current + 1)
        else setCurrent(0)
    }

    return (
        <ProfileContainer>
            <AnimeTrigger threshold='0.5' delay={0.2}>
                <div className={`profile_wrapper ${display && 'resume-toggleOn'}`}>
                    <IntroSection
                        className={`${display && 'resume-toggleOn'}`}
                        custom={.1}
                        variants={variants.inViewVariants.stagger}>
                        <div className='intro_wrapper'>
                            <motion.h3 className='intro_title'
                                variants={variants.inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >What about me</motion.h3>
                            <motion.p
                                className="intro_content"
                                variants={variants.inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >
                                Like a man walks into a mysterious place,
                                feel novel and strange, but he has deeply
                                appealed to it.
                            </motion.p>
                            <motion.span
                                className='postscript'
                                variants={variants.inViewVariants.zoomInFromX}
                                transition={{ duration: .5 }}
                            >*While resume has been toggled on, click right side is allowed.</motion.span>
                        </div>
                    </IntroSection>
                    <Buttons
                        className="button_wrapper"
                        variants={variants.inViewVariants.zoomInFromY}
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
                    <AnimateSharedLayout type='crossfade'>
                        <PhotoWrapper className={`${display && 'resume-toggleOn'}`}>
                            <motion.img
                                src={images.selfie}
                                alt='selfie'
                                className="photo"
                                style={{ opacity: `${display ? 0 : 1}` }}
                                variants={variants.inViewVariants.photo}
                                transition={{ duration: .7 }}
                            />
                            <AnimatePresence>
                                {display === true &&
                                    <Resume
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <div className='carousel-track'>
                                            {images.resume.map((page, index) =>
                                                <motion.img
                                                    key={'resume-page-' + index}
                                                    src={page}
                                                    alt={'resume-page-' + index}
                                                    className={`resume ${current === index && 'active'}`}
                                                    layoutId={'resume-' + index}
                                                />
                                            )}
                                            {index === false &&
                                                <motion.span
                                                    className="magnify"
                                                    whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                                                    onClick={() => handleResumeToggle(current)}
                                                />}
                                        </div>
                                    </Resume>}
                            </AnimatePresence>
                        </PhotoWrapper>
                        <AnimatePresence>
                            {index !== false &&
                                <Overlay
                                    key='overlay'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .3 }}
                                    onClick={() => setIndex(false)} />
                            }
                            {index === current &&
                                <Resume className='stretched'>
                                    <motion.img
                                        key={'resume-stretched-' + index}
                                        src={images.resume[index]}
                                        alt={'resume-' + index}
                                        className="resume-stretched"
                                        layoutId={'resume-' + index}
                                        onClick={() => setIndex(false)}
                                    />
                                </Resume>
                            }
                        </AnimatePresence>
                    </AnimateSharedLayout>
                </div>
            </AnimeTrigger>
        </ProfileContainer>
    )
}

export default Profile