import React from 'react'
// layouts
import { Layout } from '../layouts/other-pages'
// container
import { AboutFooter, AboutHero, AboutProfile } from '../container'

const About = () => {
    return (
        <Layout>
            <AboutHero />
            <AboutProfile />
            <AboutFooter />
        </Layout>
    )
}

export default About
