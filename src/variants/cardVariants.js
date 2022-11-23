export const cardVariants = {
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
