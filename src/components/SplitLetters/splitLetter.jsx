import { motion } from 'framer-motion'


export const SplitLetters = ({ text, textClass, textStyle, ...props }) => {
    return (
        <>
            {
                [...text].map((letter, index) => (
                    <motion.span
                        key={'letter' + index}
                        style={{ display: 'inline-block' }}
                        {...props}
                    >
                        <motion.span
                            className={textClass}
                            style={{ display: 'inline-block', ...textStyle }}
                        >
                            {letter}
                        </motion.span>
                    </motion.span>
                ))
            }
        </ >
    )
}