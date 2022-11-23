export const contactVariants = {
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