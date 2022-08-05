import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
// hooks
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
// context
import { useCursor } from '../../../context/cursorContext'
// constants
import { data, images, variants } from '../../../constants'
// component
import { Lock } from '../../../components'
// styles
import { Bar } from '../../../styles/GlobalStyles'
import {
    Carousel,
    Scroller,
    InfoContainer,
    CardContainer,
    ProgressBar
} from './framerSlider.style'


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


export const FramerScroll = () => {

    const [width] = useWindowSize()
    const isMatch = useMediaQuery()
    const { setCursorType } = useCursor()
    // group select && unlock
    const [groupSelected, setGroupSelected] = useState(null)
    const control = useAnimation()
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
        <Carousel ref={carousel}>
            <Bar top lighten lower__layer variants={variants.inViewVariants.bar} />
            <Bar bottom lighten lower__layer variants={variants.inViewVariants.bar} />
            <Bar left lighten lower__layer variants={variants.inViewVariants.bar} />
            <Bar right lighten lower__layer variants={variants.inViewVariants.bar} />
            <Scroller
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
                        {
                            !isMatch && <Lock
                                isFirst={info.isFirst}
                                group={info.group}
                                groupSelected={groupSelected}
                                groupLength={info.groupLength}
                                setGroupSelected={setGroupSelected}
                                control={control}
                            />
                        }
                        <motion.div
                            className='period'
                            variants={variants.cardVariants.period[info.group - 1]}
                        >
                            {info.date}
                        </motion.div>
                        {
                            info.card === true
                                ?
                                <Card group={info.group}>
                                    <section className='experience_card_content'>
                                        <motion.h1
                                            className='experience_card_title'
                                            variants={variants.cardVariants.title[info.group - 1]}
                                        >{info.title}</motion.h1>
                                        <motion.ul className='experience_card_detail'>
                                            {info.entries?.map((entry, i) =>
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
                                    key={i}
                                    data-dashed-board
                                    variants={{
                                        unlock2: { opacity: [0, 1] }
                                    }}
                                    transition={{ when: 'beforeChildren', delay: 0.3 }}
                                >
                                    <motion.img
                                        src={images.airplane}
                                        alt="airplane"
                                        variants={{
                                            unlock2: {
                                                opacity: [0, 1, 1, 1],
                                                y: [150, 150, -250, -150],
                                                scale: [1, 1, 1, 1.5],
                                                transition: { duration: 2.5, times: [0, 0.1, 0.45, 1] }
                                            }
                                        }}
                                    />
                                    <motion.span
                                        variants={{ unlock2: { opacity: 1, transition: { duration: .5, delay: 2.8 } } }}
                                    >study tour and working holiday</motion.span>
                                </motion.div>
                        }
                    </InfoContainer>
                )}
            </Scroller>
            <ProgressBar variants={variants.inViewVariants.progressBar}>
                <motion.div className='progress-bar' style={{ width: barWidth }} />
            </ProgressBar>
        </Carousel>
    )
}