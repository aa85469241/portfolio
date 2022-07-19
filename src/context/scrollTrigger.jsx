import { useMotionValue } from 'framer-motion';
import { useContext, createContext, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import clamp from 'lodash/clamp';

const ScrollTriggerContext = createContext(null);

const useScrollTrigger = () => useContext(ScrollTriggerContext);

const DEFAULT_OPTIONS = {
    start: 'top top',
    end: '+=100%',
    scrub: true,
    pin: true,
}

const ScrollTriggerProvider = ({ children, options = {} }) => {
    const scrollTriggerRef = useRef(null);
    const timeLineRef = useRef()
    const motionValue = useMotionValue(0)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (scrollTriggerRef.current) {
            timeLineRef.current = gsap.timeline({
                scrollTrigger: {
                    ...DEFAULT_OPTIONS,
                    ...options,
                    trigger: scrollTriggerRef.current,
                    onUpdate: (instance) => {
                        motionValue.set(clamp(instance.progress, 0, 1))
                    }
                }
            })
        }

        return () => {
            timeLineRef.current?.scrollTrigger?.kill();
            timeLineRef.current?.kill();
            timeLineRef.current?.clear();
        }
    }, [options, motionValue])

    return (
        <div ref={scrollTriggerRef}>
            <ScrollTriggerContext.Provider value={motionValue}>
                {children}
            </ScrollTriggerContext.Provider>
        </div>
    )
}

export { ScrollTriggerProvider, useScrollTrigger }