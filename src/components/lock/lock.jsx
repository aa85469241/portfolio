import React, { useState } from 'react'
import { motion } from 'framer-motion'
// styles
import { GroupSelector, LockBody } from './lock.style'
import { useCursor } from '../../context/cursorContext'


const lockVariants = {
    motion1: { rotate: [-30, 30], transition: { duration: 0.1, repeat: 3 } },
    motion2: { rotate: [30, 0], scale: [1, 1, 0], opacity: [1, 1, 0], transition: { duration: 0.5 } }
}

export const Lock = ({ isFirst, group, groupLength, setGroupSelected, control }) => {
    const {setCursorType} = useCursor()
    const [animateOn, setAnimateOn] = useState(false);

    const handleAnimate = () => {
        if (animateOn === false) {
            setAnimateOn(true)
            control.start(`unlock${group}`)

            setTimeout(() => {
                setAnimateOn(false)
            }, [300])
        }
    }
    return (
        <>
            {isFirst ?
                <GroupSelector
                    style={{ width: `calc(100% * ${groupLength})` }}
                    onClick={() => setGroupSelected(group)}
                    initial={false}
                    animate={animateOn ? 'motion1' : 'motion2'}
                    variants={{
                        motion1: { opacity: [1, 0] },
                        motion2: {
                            opacity: [1, 0, 1],
                            backgroundColor: ['hsl(37 27 94 1)', 'hsla(37 27 94 0)'],
                        }
                    }}
                    transition={{ duration: 1 }}
                    transitionEnd={{ display: 'none' }}
                >
                    <LockBody
                        initial={false}
                        animate={animateOn ? 'motion1' : 'motion2'}
                        variants={lockVariants}
                        onClick={handleAnimate}
                        onMouseEnter={() => setCursorType('key')}
                        onMouseLeave={() => setCursorType('drag_hovered')}
                    >
                        <motion.div className="lock-body-wrapper">
                            <div className="lock-head" />
                            <div className="key-cylinder" />
                        </motion.div>
                    </LockBody>
                </GroupSelector> : ''}
        </>
    )
}