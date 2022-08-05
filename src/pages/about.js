import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// layouts
import { Layout } from '../layouts/other-pages'
// container
import { AboutFooter, AboutHero, AboutProfile } from '../container'

const About = () => {

    const location = useLocation()
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [location.pathname])

    return (
        <Layout>
            <AboutHero />
            <AboutProfile />
            <AboutFooter />
        </Layout>
    )
}

export default About
