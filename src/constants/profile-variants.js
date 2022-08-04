const hero = {
    rowTopText: {
        hidden: { y: 250 },
        visible: { y: 0, transition: { duration: .5, delay: .5 } }
    },
    marqueePlay: {
        visible: { animationPlayState: 'running', transition: { when: "afterChildren" } }
    },
    marqueeText: {
        hidden: { y: 250 },
        visible: { y: 0, transition: { duration: .5, delay: .5 } }
    },
    selfie: {
        hidden: { opacity: 0 },
        visible: { opacity: 0.75, transition: { duration: .5, delay: 1 } }
    },
    scrollSign: {
        hidden: { y: 150 },
        visible: { y: 0, transition: { duration: .5, delay: .5 } }
    }
}

const profile = {
    stagger: {
        visible: (sec) => ({
            transition: {
                staggerChildren: sec
            }
        })
    },
    infoText: {
        hidden: { opacity: 0, y: 200, scale: 1.3 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: .5 } }
    },
    heading: {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: .5 } }
    },
    profileLetters: {
        hidden: { y: 150, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: .3 } }
    },
    bioHeading: {
        hidden: { y: 100 },
        visible: { y: 0, color: 'var(--clr-red)', transition: { duration: .5, color: { delay: 1, duration: .5 } } }
    },
    delayBioHeading: {
        hidden: { opacity: 0, x: -200 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                delay: .7,
            }
        }
    },
    autobiography: {
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: .5 } }
    }
}

const profileVariants = {
    hero,
    profile,
}

export default profileVariants