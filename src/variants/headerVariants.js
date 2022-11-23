export const headerVariants = {
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
                stiffness: 50,
                restDelta: 2,
            }
        }
    },
    header: {
        open: {
            x: 0, opacity: 1,
            transition: {
                type: "spring", stiffness: 120, damping: 20, delay: .25,
            }
        },
        closed: {
            x: -100, opacity: 0,
            transition: {
                stiffness: 1000,
            }
        }
    },
    headerLine: {
        open: { scaleX: 1, transition: { type: "spring", stiffness: 120, damping: 20, delay: .25, } },
        closed: { scaleX: 0, transition: { duration: .5 } }
    },
    item: {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring", stiffness: 100, damping: 20, delay: 1,
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: { stiffness: 1000 }
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