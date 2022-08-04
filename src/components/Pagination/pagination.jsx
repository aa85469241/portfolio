import React, { useState } from 'react'
import { Link as Scroll } from 'react-scroll'
import { motion } from 'framer-motion'
// components
import { AnimeTrigger } from '..'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import { PaginationContainer, Pages } from './pagination.style'

const pages = [
    { id: 1, pageName: 'home', offset: -25 },
    { id: 2, pageName: 'about', offset: -25 },
    { id: 3, pageName: 'experiences', offset: -23 },
    { id: 4, pageName: 'contact', offset: -25 },
]

export const Pagination = () => {

    const { setCursorType } = useCursor()
    const [isSelected, setIsSelected] = useState('home')

    const handleSetActive = (to) => {
        setIsSelected(to)
    }

    return (
        <PaginationContainer>
            <AnimeTrigger threshold='0.5' delay={1}>
                <Pages variants={{
                    visible: { y: 0, transition: { duration: .5, ease: 'easeInOut' } },
                    hidden: { y: 400 }
                }}>
                    {pages.map((page) =>
                        <Scroll
                            to={page.pageName}
                            spy={true}
                            smooth={true}
                            offset={page.offset}
                            duration={700}
                            onSetActive={handleSetActive}
                            key={'page-' + page.id}
                            className='page-container'
                            onMouseEnter={() => setCursorType('navigate down')}
                            onMouseLeave={setCursorType}
                            onClick={() => setIsSelected(page.pageName)}
                        >
                            <span className='page-checkbox'>
                                {isSelected === page.pageName
                                    && <motion.span
                                        className='selected'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: .5, delay: .3 } }}
                                    />}
                            </span>
                            <span className='page-name'>
                                {isSelected === page.pageName
                                    && <motion.span
                                        className='slider'
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%', transition: { duration: .3, delay: .3 } }}
                                    />}
                                {page.pageName}
                            </span>
                        </Scroll>
                    )}
                </Pages>
            </AnimeTrigger>
        </PaginationContainer>
    )
}

