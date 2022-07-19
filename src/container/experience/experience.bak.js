{/* <Board className='board' variants={variants.inViewVariants.boardFall}>
    {groupSelected === null ? <span className='board-content-default'>Click right side to see more information</span> : ''}
    {data.periodInfo.map((info, index) =>
        <section key={index} className="board-content-container">
            {info.id === groupSelected && groupSelected !== null ?
                <AnimatePresence>
                    <motion.div
                        className='board-content-wrapper'
                        initial='disappear'
                        animate='appear'
                        exit='disappear'
                        variants={{
                            appear: { x: 0, opacity: 1 },
                            disappear: { x: -100, opacity: 0 }
                        }}
                        transition={{ type: 'spring', duration: 1 }}
                    >
                        <p className='board-content'>{info.content}</p>
                    </motion.div>
                </AnimatePresence>
                : ''}
        </section>
    )}
</Board> */}

// export const Board = styled(motion.div)`
//     grid-column: 1 / 4; 
//     height: min(50vh - 2rem, 50%);
//     margin-top: 4.5rem;
//     padding: 4rem 0;
//     overflow: hidden;
//     border: 3px solid ${props => props.theme.border};

//     display: flex;
//     ${media.laptop} {grid-column: 1 / 3;}
//     ${media.tablet} {display: none;}
//     .board-content-default {
//         align-self: center;
//         font-size: var(--step--1);
//         color: ${props => props.theme.text};
//         padding: 0 1rem;
//         line-height: 2;
//     }
//     .board-content-container {  
//         align-self: center;
//         line-height: 2;
//         .board-content-wrapper {
//             display: flex;
//             align-items: center;
//             padding: 0 1rem;
//             /* height: 100%; */
//             .board-content {
//                 font-size: var(--step--1);
//                 color: ${props => props.theme.text};
//             }
//         }
//     }
// `