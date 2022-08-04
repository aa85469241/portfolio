import React, { useState } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { AnimeTrigger } from '../../../components'
// constants
import { data, images } from '../../../constants';
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickCarousel, SlideContainer, Arrow, Paging, OnBoard } from './slickSlider.style'


const NextArrow = ({ onClick }) => {

    return <Arrow className='next' onClick={onClick}>next</Arrow>
}

const PrevArrow = ({ onClick }) => {

    return <Arrow className='prev' onClick={onClick}>prev</Arrow>
}

const Slide = ({ key, initial, animate, variants, children }) => {

    return (
        <SlideContainer
            key={key}
            initial={initial}
            animate={animate}
            variants={variants}
        >
            <div className='slide-block'>
                {children}
            </div>
        </SlideContainer>
    )
}

const variants = {
    slide: {
        selected: { scale: 1, transition: { duration: .5 } },
        initial: { scale: 0.9, transition: { duration: .5 } }
    },
    airplane: {
        initial: {
            y: 200,
            scale: 0,
        },
        selected: {
            y: [200, -800, -200],
            scale: [1, 1.2, 1.2],
            transition: { duration: 3, times: [0, 0.3, 1] }
        }
    },
    onBoardText: {
        initial: { opacity: 0 },
        selected: { opacity: 1, transition: { duration: .5, delay: 3.5 } }
    }
}

export const StickSlider = () => {

    const [onSlide, setSlide] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        swipe: false,
        afterChange: (index) => {
            setSlide(index)
        },
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => {
            return (
                <Paging className='custom-dot'>{i + 1}</Paging>
            )
        },
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <SlickCarousel>
            <AnimeTrigger threshold='0.5'>
                <motion.div variants={{ visible: { opacity: 1, transition: { duration: 1 } }, hidden: { opacity: 0 } }}>
                    <Slider {...settings}>
                        {data.experiences.map((item, index) =>
                            <>
                                {item.card === true
                                    ?
                                    <Slide
                                        key={index}
                                        initial='initial'
                                        animate={onSlide === index ? 'selected' : 'initial'}
                                        variants={variants.slide}
                                    >
                                        <span className='slide-date'>{item.date}</span>
                                        <span className='slide-title'>{item.title}</span>
                                        <ul className='slide-list'>
                                            {item.entries?.map((entry) =>
                                                <li
                                                    key={'line-' + entry.id}
                                                    className='slide-content'
                                                >
                                                    {entry.info}
                                                </li>
                                            )}
                                        </ul>
                                    </Slide>
                                    :
                                    <OnBoard
                                        initial='initial'
                                        animate={onSlide === index ? 'selected' : 'initial'}
                                    >
                                        <motion.img
                                            src={images.airplane}
                                            alt="airplane"
                                            className="airplane"
                                            variants={variants.airplane}
                                        />
                                        <motion.span variants={variants.onBoardText}>
                                            study tour and working holiday
                                        </motion.span>
                                    </OnBoard>
                                }
                            </>
                        )}
                    </Slider>
                </motion.div>
            </AnimeTrigger>
        </SlickCarousel >
    )
}