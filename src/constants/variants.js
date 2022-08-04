
const pageTransform = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, transition: { duration: 0.75 } }
}

const loaderVariants = {
    stagger: {
        animate: {
            transition: {
                staggerChildren: .03
            }
        }
    },
    wrapOut: {
        exit: (custom) => ({
            y: 1000 * custom,
            transition: { duration: 1 }
        })
    },
    wrapOutHorizontal: {
        exit: (custom) => ({
            x: 1000 * custom,
            transition: { duration: 1 }
        })
    },
    loadingText: {
        initial: { scale: 0 },
        animate: { scale: 1, transition: { type: 'spring', stiffness: 100, when: 'beforeChildren' } },
    },
    loadingThumb: {
        animate: { width: '100%', transition: { duration: 3, ease: [.26, -.89, .54, .71] } }
    },
    loadingFinished: {
        animate: {
            scaleY: 0, display: 'none',
            transition: {
                duration: .8,
                delay: .5,
                when: 'afterChildren',
                display: { delay: 1.5 }
            }
        }
    },
    portfolio: {
        initial: { y: 100 },
        animate: { y: 0, transition: { duration: .3 } },
        exit: { opacity: 0 }
    },
}

const headerVariants = {
    menuBarBlock: {
        open: (custom) =>
            ({ y: [0, 5 * custom, 5 * custom], rotate: [0, 0, 45 * custom], transition: { duration: .8 } }),
        closed: { y: 0, rotate: 0, transition: { duration: 1 } }
    },
    menuBarMiddle: {
        open: { x: -30, opacity: 0, transition: { duration: .5 } },
        closed: { x: 0, opacity: 1, transition: { duration: .3, delay: .5 } }
    },
    overlay: {
        closed: { x: '100vw', transition: { duration: .3, when: 'afterChildren' } },
        open: { x: 0, transition: { duration: .3, when: 'beforeChildren' } }
    },
    navWrapper: {
        closed: {
            clipPath: 'circle(0vh at 100% 0)',
            display: 'none',
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                when: 'afterChildren',
                display: {
                    delay: .5
                }
            }
        },
        open: {
            clipPath: 'circle(200vh at 100% 0)',
            display: 'block',
            transition: {
                type: "spring",
                stiffness: 30,
                restDelta: 2,
            }
        }
    },
    item: {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            }
        }
    },
    stagger: {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        },
        active: { transition: { staggerChildren: 0.05 } },
    },
    fadeOut: {
        hidden: { y: 150 },
        visible: { y: 0, transition: { duration: 1 } }
    },
    icon: {
        initial: { y: -50, opacity: 0 },
        active: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0, transition: { y: { delay: 0.5 } } }
    },
}

const cardVariants = {
    path: [
        { unlock1: { pathLength: [0, 1], transition: { duration: 2, delay: .5 } } },
        { unlock2: { pathLength: [0, 1], transition: { duration: 2, delay: .5 } } },
        { unlock3: { pathLength: [0, 1], transition: { duration: 2, delay: .5 } } },
    ],
    title: [
        { unlock1: { x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
        { unlock2: { x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
        { unlock3: { x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
    ],
    period: [
        { unlock1: { y: [-50, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
        { unlock2: { y: [-50, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
        { unlock3: { y: [-50, 0], opacity: [0, 1], transition: { duration: .5, delay: 1 } } },
    ],
    entry: [
        { unlock1: i => ({ x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: i * 0.35 } }) },
        { unlock2: i => ({ x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: i * 0.35 } }) },
        { unlock3: i => ({ x: [-200, 0], opacity: [0, 1], transition: { duration: .5, delay: i * 0.35 } }) },
    ],
    lockCheck: [
        { unlock1: { opacity: [0.1, 1], transition: { duration: 1 } } },
        { unlock2: { opacity: [0.1, 1], transition: { duration: 1 } } },
        { unlock3: { opacity: [0.1, 1], transition: { duration: 1 } } },
        { unlock4: { opacity: [0.1, 1], transition: { duration: 1 } } },
    ]
}

const inViewVariants = {
    bar: {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 1 } },
    },
    zoomInFromX: {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    },
    zoomInFromXVerse: {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    },
    zoomInFromY: {
        hidden: { y: 200 },
        visible: { y: 0 }
    },
    animateLetters: {
        hidden: { y: 150, opacity: 0, x: '9%' },
        visible: { y: 0, opacity: 1, transition: { duration: .5 } }
    },
    progressBar: {
        visible: { width: 'calc(100% - 40px)', transition: { duration: 1 } },
        hidden: { width: 0 }
    },
    oscillation: {
        visible: { y: [13, 0], transition: { duration: .6, repeat: Infinity, repeatType: 'reverse' } },
    },
    visibility: {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    },
    stagger: {
        visible: (i) => ({ transition: { staggerChildren: i } })
    },
    photo: {
        visible: { width: '100%' },
        hidden: { width: 0 },
    }
}

const contactVariants = {
    textFall: {
        hideInfo: { y: -550, opacity: 0, transition: { duration: .5 } },
        showInfo: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 17, duration: .5, delay: .5 } }
    },
    crack: {
        hideInfo: { opacity: 0 },
        showInfo: { opacity: 1, transition: { duration: .01, delay: .72 } }
    },
    contactButton: {
        disappear: { x: -100, opacity: 0 },
        appear: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        showInfo: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
        hideInfo: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.2 } }
    },
    backToTop: {
        disappear: { opacity: 0, y: 100, transition: { duration: 0.5 } },
        appear: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } },
    },
    leadingText: {
        disappear: { x: -100, opacity: 0 },
        appear: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        showInfo: { opacity: 0.3, transition: { duration: 0.5 } },
        hideInfo: { opacity: 1, transition: { duration: 0.5 } }
    },
    svgPath: {
        hideInfo: { pathLength: 0, opacity: 0, transition: { duration: 1 } },
        showInfo: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1, } }
    },
    zIndex: {
        showInfo: { zIndex: 10 },
        hideInfo: { zIndex: 0 }
    }
}

const exportVariants = {
    pageTransform,
    cardVariants,
    inViewVariants,
    contactVariants,
    loaderVariants,
    headerVariants,
}

export default exportVariants