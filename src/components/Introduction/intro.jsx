import React from 'react'
import { motion } from 'framer-motion'
import { Link as Scroll } from 'react-scroll'
import { AiOutlineArrowDown } from "react-icons/ai"
import { AnimeTrigger } from '../../components'
import { images } from '../../constants'
import { heroVariants } from '../../variants/heroVariants'
import {
    SortArea,
    IntroSection,
    IDCardContainer,
    CityCardContainer,
    ScrollDown,
    TopRow,
    MiddleRow,
    BottomRow,
} from './intro.style'

const IDCard = () => {
    return (
        <IDCardContainer variants={heroVariants.idCard}>
            <img src={images.silhouette_selfie} alt="silhouette_selfie" className="photo" />
            <div className="id-card-name">
                <div className="text">CHANG CHENG</div>
                <div className="text">LIOU</div>
            </div>
            <div className="id-card-content">
                <h2 className="text">Born in 1994.</h2>
            </div>
        </IDCardContainer>
    )
}

const CityCard = () => {
    return (
        <CityCardContainer variants={heroVariants.cityCard}>
            <div className="text">Taichung city.</div>
            <img src={images.skyline} alt="skyline" className="backdrop" />
        </CityCardContainer>
    )
}

export const Intro = () => {
    return (
        <AnimeTrigger threshold="0.5">
            <SortArea>
                <IntroSection>
                    <TopRow>
                        <div className="wrapper">
                            <motion.div
                                className="row-text"
                                custom={2}
                                variants={heroVariants.text}
                            >Hello, I'm</motion.div>
                        </div>
                        <IDCard />
                    </TopRow>
                    <MiddleRow>
                        <CityCard />
                        <div className="wrapper">
                            <motion.div
                                className="row-text"
                                custom={2}
                                variants={heroVariants.text}
                            >Now based in</motion.div>
                            <motion.span
                                className="left-side-arrow"
                                custom={6}
                                variants={heroVariants.text}
                            />
                        </div>
                    </MiddleRow>
                    <BottomRow>
                        <motion.div
                            className="row-text"
                            custom={2}
                            variants={heroVariants.text}
                        >Glad to see you ~</motion.div>
                    </BottomRow>
                    <ScrollDown>
                        <Scroll
                            to='about'
                            spy={true}
                            smooth={true}
                        >
                            <AiOutlineArrowDown className="arrow-down" />
                        </Scroll>
                    </ScrollDown>
                </IntroSection>
            </SortArea>
        </AnimeTrigger>
    )
}