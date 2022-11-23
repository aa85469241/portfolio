import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// containers
import { Layout } from '../layouts/Home'
import { Hero, Profile, Experience, Contact } from '../container'
import { Loader } from '../components'


const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    // toggle resume in profile page
    const [onDisplay, setOnDisplay] = useState(false)

    return (
        <Layout
            onDisplay={onDisplay}
            setOnDisplay={setOnDisplay}
        >
            <AnimatePresence>
                {isLoading
                    ? <motion.div key='loader'>
                        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
                    </motion.div>
                    :
                    <>
                        <Hero isLoading={isLoading} />
                        <Profile onDisplay={onDisplay} setOnDisplay={setOnDisplay} />
                        <Experience />
                        <Contact />
                    </>
                }
                {/* <>
                    <Hero isLoading={isLoading} />
                    <Profile onDisplay={onDisplay} setOnDisplay={setOnDisplay} />
                    <Experience />
                    <Contact />
                </> */}
            </AnimatePresence>
        </Layout>
    )
}

export default Home
