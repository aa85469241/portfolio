import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
// constants
import { data } from '../../constants'
// variants
import { profileVariants } from '../../variants'
// components
import { AnimeTrigger, SplitLetters } from '../../components'
// hooks
import useScrollElement from '../../hooks/useScrollElement'
import { useMediaQuery } from '../../hooks/useMediaQuery'
// styles
import {
    ProfileContainer,
    ProfileContent,
    PersonalDetail,
    PersonalInfo,
    Profile,
    SkillContainer,
    WhatCanIDo,
    Skills,
    Next,
    Autobiography,
    BioHeading,
    QRcode,
} from './profile-about.style'



const AboutProfile = () => {
    const [nextHide, setNextHide] = useState(false)
    const isMatch = useMediaQuery('(max-width: 525px)')
    const [selected, setSelected] = useState({
        target: "",
        imgSrc: null,
        onHover: false,
    });

    // scroll animation //
    const { scrollY } = useViewportScroll();
    // personalInfo 
    const personalRef = useRef(null);
    const [initialPosition, finalPosition] = useScrollElement(personalRef)
    const yRangeOfPersonalInfo = useTransform(scrollY, [initialPosition, finalPosition / 3], [300, -70])
    const y = useSpring(yRangeOfPersonalInfo, { stiffness: 400, damping: 90 })
    // skillContainer
    const skillRef = useRef(null);
    const [skillInit, skillFinal] = useScrollElement(skillRef)
    const scaleRate = [1, 1, 0.8]
    const scaleOfSkillContainer = useTransform(scrollY, [skillInit + 200, skillInit + 350, skillFinal], scaleRate)
    const scale = useSpring(scaleOfSkillContainer, { stiffness: 300, damping: 120 })


    return (
        <ProfileContainer ref={personalRef}>
            {/* personal information */}
            <ProfileContent _diffBg className='personal-info-container'>
                <AnimeTrigger threshold='0.5'>
                    <motion.div className="profile-content-wrapper" variants={profileVariants.profile.stagger} custom={.2}>
                        <PersonalInfo className='personal-info-card' style={{ y }}>
                            <motion.div className='info-wrapper' variants={profileVariants.profile.stagger} custom={.2}>
                                <motion.div className='info-title-wrapper' variants={profileVariants.profile.heading}>
                                    <span className='info-title'>who
                                        <span className="follow-text">am I</span>
                                    </span>
                                </motion.div>
                                <PersonalDetail className="about-me-content">
                                    <motion.div className='name-wrapper _fc-diff' variants={profileVariants.profile.infoText}>
                                        <span className='chinese-name'>劉昌成</span>
                                        <span className="english-name">Chang Cheng Liou</span>
                                    </motion.div>
                                    <motion.span className="underline" variants={profileVariants.profile.infoText} />
                                    <motion.ul className='personal-info _fc-diff'>
                                        <motion.li className='info-item' variants={profileVariants.profile.infoText}>RESIDENCE: <span>Taichung city.</span></motion.li>
                                        <motion.li className='info-item' variants={profileVariants.profile.infoText}>DATE OF BIRTH: <span>1994/11/15</span></motion.li>
                                        <motion.li className='info-item' variants={profileVariants.profile.infoText}>COLLEGE: : <span>Fong Cha University</span></motion.li>
                                    </motion.ul>
                                </PersonalDetail>
                            </motion.div>
                        </PersonalInfo>
                        <Profile className='personal-profile'>
                            <motion.h3 className="profile-title"><span>我並非本科生</span>, 卻也有所期望...</motion.h3>
                            <motion.div
                                className='letter-split'
                                variants={profileVariants.profile.stagger}
                                custom={.02}
                            >
                                <SplitLetters
                                    text={'在參加台中世貿舉辦的AI大數據與人工智慧人才培訓班, 是我第一次正式接觸程式設計的領域, 但因為對這塊領域的生澀和專業知識的不足, 我花了更多的時間來學習除了python之外的語言, 雖然花的時間有點久了, 卻也感覺到自己在一點點的成長.'}
                                    variants={profileVariants.profile.profileLetters}
                                />
                            </motion.div>
                        </Profile>
                    </motion.div>
                </AnimeTrigger>
            </ProfileContent>
            {/* personal skill */}
            <ProfileContent _diffBg noPadding>
                <AnimeTrigger threshold='0.5'>
                    <SkillContainer ref={skillRef} style={{ scale: scale }}>
                        <WhatCanIDo variants={profileVariants.profile.heading}>
                            <motion.span className='skill-title'>What can I do</motion.span>
                        </WhatCanIDo>
                        <QRcode>
                            <img
                                src={selected.imgSrc}
                                alt={selected.target}
                                className={`qr-code 
                                    ${selected.onHover ? "hovered" : ""}
                                `}
                            />
                        </QRcode>
                        <Skills variants={profileVariants.profile.stagger} custom={.2}>
                            {data.skills.map((skill) =>
                                <motion.span
                                    className={`skill-wrapper ${skill.src === null ? "" : "clickable"}`}
                                    key={skill.id}
                                    variants={profileVariants.profile.infoText}
                                    onHoverStart={() => setSelected({ target: skill.title, imgSrc: skill.src, onHover: true, onActive: false })}
                                    onHoverEnd={() => setSelected({ target: "", imgSrc: null, onHover: false })}
                                >
                                    {skill.src === null
                                        ?
                                        <span className="skill-text">
                                            {skill.title}
                                        </span>
                                        :
                                        <a href={skill.uri} className="skill-link">
                                            <span className="skill-text">
                                                {skill.title}
                                            </span>
                                        </a>
                                    }
                                </motion.span>
                            )}
                        </Skills>
                    </SkillContainer>
                </AnimeTrigger>
            </ProfileContent>
            <AnimatePresence>
                {!nextHide &&
                    <AnimeTrigger threshold='0.7'>
                        <Next exit={{ height: 0, transition: { duration: .65 } }}>
                            <motion.div
                                className="next-text"
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: .5 } } }}
                                exit={{ opacity: 0 }}
                                onAnimationComplete={() => setTimeout(() => { setNextHide(true) }, 1000)}
                            >And Next......</motion.div>
                        </Next>
                    </AnimeTrigger>
                }
            </AnimatePresence>
            {/* autobiography */}
            <ProfileContent _diffBg>
                <motion.div className="profile-content-wrapper _column">
                    {nextHide &&
                        <BioHeading>
                            <AnimeTrigger threshold='0.25'>
                                <motion.div className="bio-heading-wrapper" variants={profileVariants.profile.stagger} custom={.2}>
                                    <motion.span>
                                        <motion.span className='bio-heading-text its' variants={profileVariants.profile.delayBioHeading}>It's my </motion.span>
                                        <motion.span className='bio-heading-text' variants={profileVariants.profile.bioHeading}>Autobiography</motion.span>
                                    </motion.span>
                                </motion.div>
                            </AnimeTrigger>
                        </BioHeading>
                    }
                    <Autobiography>
                        {data.autobiography.map((para) =>
                            <AnimeTrigger threshold={isMatch ? 0.7 : 1} key={para.id}>
                                <motion.div className="bio-paragraph-wrapper" variants={profileVariants.profile.stagger}>
                                    <motion.h2 className="bio-paragraph-heading" variants={profileVariants.profile.autobiography}>{para.heading}</motion.h2>
                                    <motion.p className="bio-paragraph-content" variants={profileVariants.profile.autobiography}>
                                        {para.content}
                                    </motion.p>
                                </motion.div>
                            </AnimeTrigger>
                        )}
                    </Autobiography>
                </motion.div>
            </ProfileContent>
            <div className="spacer"></div>
        </ProfileContainer>
    )
}

export default AboutProfile