import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactPageScroller from 'react-page-scroller'
// containers
import { Layout } from '../layouts/Home'
import { Hero, Profile, Experience, Contact } from '../container'
import { Loader } from '../components'


const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pagination, setPagination] = useState(0)

    const handlePageChange = number => {
        setPagination(number)
    }

    return (
        <Layout pagination={pagination} setPagination={setPagination}>
            <AnimatePresence>
                {isLoading
                    ? <motion.div key='loader'>
                        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
                    </motion.div>
                    : <ReactPageScroller
                        containerWidth={'100%'}
                        containerHeight={'calc(100vh - 110px)'} //calc(100vh - 110px)' 
                        renderAllPagesOnFirstRender={true}
                        customPageNumber={pagination}
                        onBeforePageScroll={handlePageChange}
                        pageOnChange={handlePageChange}
                    >
                        <Hero setPagination={setPagination} isLoading={isLoading} />
                        <Profile />
                        <Experience />
                        <Contact setPagination={setPagination} />
                    </ReactPageScroller>}
            </AnimatePresence>
        </Layout>
    )
}

export default Home
