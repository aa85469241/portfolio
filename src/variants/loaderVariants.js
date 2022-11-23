export const loaderVariants = {
    stagger: {
        animate: {
            transition: {
                staggerChildren: .03
            }
        }
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
            scaleY: 0,
            display: 'none',
            transition: {
                duration: .8,
                delay: .5,
                when: 'afterChildren',
                display: { delay: 1.5 }
            }
        }
    },
    portfolio: {
        initial: { y: 150 },
        animate: { y: 0, transition: { duration: .3 } },
        exit: { opacity: 0 }
    },
}