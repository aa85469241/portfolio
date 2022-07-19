import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Bar, Flex } from '../../styles/GlobalStyles'
// constants
import { data, images } from '../../constants'
import { variants } from '../../constants'
// components   
import { AnimeTrigger } from '../../components'
import { Lock } from '../../components'
// hooks
import { useWindowSize } from '../../hooks/useWindowSize'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import {
    ExpContainer,
    Root,
    Carousel,
    InfoContainer,
    CardContainer,
    ProgressBar,
    LockChecker,
} from './experience.style'


const Card = ({ group, children }) => {
    return (
        <CardContainer>
            <svg viewBox="0 0 360 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M5.56029 39.4072C52.9134 39.4072 84.1233 38.1893 39.9989 4.08932C-5.63226 -34.8821 -1.97316 304.494 5.56029 479.054H318.736M346.44 462.593C343.6 462.593 340.819 462.597 338.108 462.613M338.108 462.613C295.615 462.857 270.523 465.855 312.001 497.911C323.677 507.882 332.126 493.083 338.108 462.613ZM338.108 462.613C355.506 373.998 352.046 152.841 346.44 22.9462H33.2637"
                    variants={variants.cardVariants.path[group - 1]}
                />
            </svg>
            {children}
        </CardContainer>
    )
}

const Experience = () => {
    // let component re-render while resizing
    const [width] = useWindowSize()
    // group select && unlock
    const [groupSelected, setGroupSelected] = useState(null)
    const control = useAnimation()
    // cursor
    const { setCursorType } = useCursor()

    // carousel sizing
    const carousel = useRef(null)
    const scroller = useRef(null)
    const [scrollerWidth, setScrollerWidth] = useState(0)

    useEffect(() => {
        const gap = scroller.current.style.gap = '5px'

        setScrollerWidth(carousel.current.scrollWidth - carousel.current.clientWidth + parseInt(gap))
    }, [width])

    // framer motion - useTransform
    const scrollX = useMotionValue(0)
    const barWidth = useTransform(
        scrollX,
        [0, -scrollerWidth],
        ['calc(0% - 0px)', 'calc(100% - 0px)'])

    return (
        <ExpContainer>
            <AnimeTrigger threshold='0.5'>
                <Flex>
                    <Root>
                        <motion.div
                            className="title_wrapper"
                            variants={variants.inViewVariants.zoomInFromX}
                            transition={{ duration: .5 }}
                        >
                            <motion.h1 className="experience_title">Experiences</motion.h1>
                        </motion.div>
                        <LockChecker initial={false} animate={`unlock${groupSelected}`}>
                            <motion.div className='lock-checker' variants={variants.cardVariants.lockCheck[0]}>1</motion.div>
                            <motion.div className='lock-checker' variants={variants.cardVariants.lockCheck[1]}>2</motion.div>
                            <motion.div className='lock-checker' variants={variants.cardVariants.lockCheck[2]}>3</motion.div>
                        </LockChecker>
                        <Carousel ref={carousel}>
                            {/* TimeLine border */}
                            <Bar top variants={variants.inViewVariants.bar} />
                            <Bar bottom variants={variants.inViewVariants.bar} />
                            <Bar left variants={variants.inViewVariants.bar} />
                            <Bar right variants={variants.inViewVariants.bar} />
                            <motion.div
                                className="inner-carousel"
                                ref={scroller}
                                style={{ x: scrollX }}
                                drag='x'
                                dragConstraints={{ right: 0, left: -scrollerWidth }}
                                onMouseDown={() => setCursorType('drag_active')}
                                onMouseUp={() => setCursorType('drag_hovered')}
                                onHoverStart={() => setCursorType('drag_hovered')}
                                onHoverEnd={setCursorType}
                            >
                                {data.experiences.map((info, i) =>
                                    <InfoContainer
                                        key={`card-${i}`} id={`card-${i}`}
                                        initial={false}
                                        animate={control}
                                    >
                                        <Lock
                                            isFirst={info.isFirst}
                                            group={info.group}
                                            groupSelected={groupSelected}
                                            groupLength={info.groupLength}
                                            setGroupSelected={setGroupSelected}
                                            control={control}
                                        />
                                        <motion.div
                                            className='period'
                                            variants={variants.cardVariants.period[info.group - 1]}
                                        >{info.date}</motion.div>
                                        {info.card === true
                                            ?
                                            <Card group={info.group}>
                                                <section className='experience_card_content'>
                                                    <motion.h1
                                                        className='experience_card_title'
                                                        variants={variants.cardVariants.title[info.group - 1]}
                                                    >{info.title}</motion.h1>
                                                    <motion.ul className='experience_card_detail'>
                                                        {info.entries.map((entry, i) =>
                                                            <motion.li
                                                                custom={i}
                                                                key={'line-' + i}
                                                                variants={variants.cardVariants.entry[info.group - 1]}
                                                            >{entry.info}</motion.li>
                                                        )}
                                                    </motion.ul>
                                                </section>
                                            </Card>
                                            :
                                            <motion.div
                                                data-dashed-board
                                                variants={{
                                                    unlock2: { opacity: [0, 1] }
                                                }}
                                                transition={{ when: 'beforeChildren', delay: 0.8 }}
                                            >
                                                <motion.img
                                                    src={images.airplane}
                                                    alt="airplane"
                                                    variants={{
                                                        unlock2: {
                                                            opacity: [0, 1, 1, 1],
                                                            y: [150, 150, -250, -150],
                                                            scale: [1, 1, 1, 1.5],
                                                            transition: { duration: 2.5, delay: 0.5, times: [0, 0.1, 0.45, 1] }
                                                        }
                                                    }}
                                                />
                                                <motion.span
                                                    variants={{ unlock2: { opacity: 1, transition: { duration: .5, delay: 2.8 } } }}
                                                >study tour and working holiday</motion.span>
                                            </motion.div>}
                                    </InfoContainer>
                                )}
                            </motion.div>
                            <ProgressBar variants={variants.inViewVariants.progressBar}>
                                <motion.div className='progress-bar' style={{ width: barWidth }} />
                            </ProgressBar>
                        </Carousel>
                    </Root>
                </Flex>
            </AnimeTrigger >
        </ExpContainer >
    )
}

export default Experience