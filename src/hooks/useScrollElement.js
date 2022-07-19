import { useState, useEffect } from 'react';

const useScrollElement = (ref) => {
    const [elementTop, setElementTop] = useState(0);
    const [elementBottom, setElementBottom] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    const initialPosition = elementTop - clientHeight;
    const finalPosition = elementBottom - clientHeight;

    useEffect(() => {
        const element = ref?.current;

        const onResize = () => {
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
            setElementBottom(element.getBoundingClientRect().bottom + window.scrollY || window.pageYOffset);
            setClientHeight(window.innerHeight);
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [ref])

    return [initialPosition, finalPosition]
}

export default useScrollElement;