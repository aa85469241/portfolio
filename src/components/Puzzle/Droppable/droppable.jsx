import React from 'react'
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useDroppable } from '@dnd-kit/core'
import { images } from "../../../constants"
import { useGlobalDispatchContext } from '../../../context/GlobalContext'

const PuzzleCell = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    place-items: center;
    place-content: center;
    padding: 10px;
    .drop-here {
        border: 4px dashed ${props => props.theme.border};
        font-size: 30px;
        font-weight: 600;
        color: ${props => props.theme.text};
        text-align: center;
        text-transform: uppercase;
        &.item-over {
            transform: scale(0.8);
            transition: .3s ease-out;
        }
        .sortable-name {
            font-size: 30px;
            color: var(--clr-red);
        }
    }
`

const SortableCard = styled(motion.div)`
    position: relative;
    flex: 1;
    background-image: url(${images.stamp_outline});
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: multiply;
    aspect-ratio: 1;
    background-color: var(--clr-white);
`

const CardFace = styled(motion.div)`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    .text {
        font-size: 25px;
        color: var(--clr-white);
        &.back {font-size: 35px;}
    }
    &.front {
        transform: perspective(500px);
        
    }
    &.back {
        transform: perspective(500px) rotateY(180deg);
    }
`

const cardVariants = {
    front: {
        flip: {
            rotateY: 180,
        }
    },
    back: {
        flip: {
            rotateY: 360,
            opacity: [0, 1]
        }
    }
}

const SortedCard = ({ item, sortAll, dropIndex }) => {
    const dispatch = useGlobalDispatchContext()

    const onAnimationComplete = () => {
        if (item.id === "card-9") {
            dispatch({ type: "PUZZLE_ANIMATE", last: true })
        }
    }

    return (
        <SortableCard
            animate={{
                scale: [0, 1],
                transition: {
                    type: "spring",
                    stiffness: 150,
                }
            }}
        >
            <motion.div
                className="card-face-wrapper"
                initial={false} animate={sortAll === true ? "flip" : "initial"}
                onAnimationComplete={onAnimationComplete}
            >
                <CardFace
                    className="front"
                    variants={cardVariants.front}
                    transition={{ duration: 1, delay: dropIndex / 2 }}
                >
                    <span className="text">{item.name}</span>
                    <span className="text">{item.status}</span>
                </CardFace>
                <CardFace
                    className="back"
                    variants={cardVariants.back}
                    transition={{ duration: 1, delay: dropIndex / 2 }}
                >
                    <span className="text back">{item.name_flipped}</span>
                </CardFace>
            </motion.div>
        </SortableCard>
    )
}

const Droppable = ({ item, sortAll, dropIndex }) => {
    const sortedCardProps = { item, sortAll, dropIndex }

    const { isOver, setNodeRef } = useDroppable({
        id: item.id,
    });
    const style = {
        opacity: isOver ? 1 : 0.5,
    };

    return (
        <PuzzleCell ref={setNodeRef} style={style}>
            <AnimatePresence>
                {item.status === "sorted"
                    ? <SortedCard {...sortedCardProps} />
                    : <motion.div className={`drop-here ${isOver ? "item-over" : null}`}>
                        drop <h6 className="sortable-name">{item.name}</h6> into here.
                    </motion.div>
                }
            </AnimatePresence>
        </PuzzleCell>
    );
}

export default Droppable