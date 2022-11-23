export const inViewVariants = {
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