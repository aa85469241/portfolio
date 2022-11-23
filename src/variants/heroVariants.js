
export const heroVariants = {
    text: {
        visible: i => ({
            y: 0,
            transition: { duration: .7, delay: .1 * i, ease: [.38, .15, .64, 1.01] }
        }),
        hidden: { y: 200 }
    },
    idCard: {
        visible: {
            x: 0, y: 0, rotate: 360,
            transition: { duration: .8, delay: 1 }
        },
        hidden: {
            x: -300, y: -375
        }
    },
    cityCard: {
        visible: {
            x: 0, y: 0, rotate: 360,
            transition: { duration: .8, delay: 1.5 }
        },
        hidden: {
            x: 200, y: -520
        }
    }
}