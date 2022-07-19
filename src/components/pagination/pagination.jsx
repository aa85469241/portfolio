import React from 'react'
import { motion } from 'framer-motion'
// components
import { AnimeTrigger } from '../../components'
// constants
import { variants } from '../../constants'
// context
import { useCursor } from '../../context/cursorContext'
// styles
import { PaginationContainer, Pages } from './pagination.style'

const pages = [
    { id: 1, pageName: 'home' },
    { id: 2, pageName: 'about' },
    { id: 3, pageName: 'experiences' },
    { id: 4, pageName: 'contact' },
]

export const Pagination = ({ pagination, setPagination }) => {

    const {setCursorType} = useCursor()

    return (
        <PaginationContainer>
            <AnimeTrigger threshold='0.5' delay={4}>
                <Pages variants={variants.inViewVariants.zoomInFromY}>
                    {pages.map((page) =>
                        <div
                            key={'page-' + page.id}
                            className='page-container'
                            onMouseEnter={() => setCursorType('navigate down')}
                            onMouseLeave={setCursorType}
                            onClick={() => setPagination(page.id - 1)}>
                            <span className='page-checkbox'>
                                {page.id === pagination + 1
                                    && <motion.span
                                        className='selected'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: .5, delay: .3 } }}
                                    />}
                            </span>
                            <span className='page-name'>
                                {page.id === pagination + 1
                                    && <motion.span
                                        className='slider'
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%', transition: { duration: .3, delay: .3 } }}
                                    />}
                                {page.pageName}
                            </span>
                        </div>
                    )}
                </Pages>
            </AnimeTrigger>
        </PaginationContainer>
    )
}

