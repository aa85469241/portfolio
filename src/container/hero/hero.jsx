import React from 'react'
// components
import { AnimeTrigger, Intro, Puzzle } from '../../components'
// context
import { useGlobalStateContext } from '../../context/GlobalContext'
import { useMediaQuery } from '../../hooks/useMediaQuery'
// styles
import { Banner, Section } from './hero.style'



const Hero = () => {

    const { exitAnimationComplete } = useGlobalStateContext()
    const isMatch = useMediaQuery("(max-width: 992px)")

    return (
        <Banner name='home'>
            <AnimeTrigger threshold='0.1' delay={0.85}>
                <Section
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    transition={{ duration: 1 }}
                >
                    {!isMatch
                        ?
                        <>
                            {exitAnimationComplete
                                ? <Intro />
                                : <Puzzle />
                            }
                        </>
                        : <Intro />
                    }
                </Section>
            </AnimeTrigger>
        </Banner>
    )
}

export default Hero