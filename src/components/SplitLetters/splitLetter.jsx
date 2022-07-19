import { motion } from 'framer-motion'


export const SplitLetters = ({ text, ...props }) => {
    return (
        <>
            {
                [...text].map((letter, index) => (
                    <span key={'letter' + index} style={{ overflow: 'hidden', display: 'inline-block' }}>
                        <motion.span
                            style={{ display: 'inline-block' }}
                            {...props}>{letter}</motion.span>
                    </span>
                ))
            }
        </ >
    )
}