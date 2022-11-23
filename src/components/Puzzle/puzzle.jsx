import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { DndContext } from '@dnd-kit/core'
import Draggable from './Draggable/draggable'
import Droppable from './Droppable/droppable'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/GlobalContext'

const PuzzleTable = styled(motion.div)`
    width: 50vw;
    display: flex;
    flex-direction: column;
`

const DroppableArea = styled(motion.div)`
    max-width: 50vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const DraggableArea = styled(motion.div)`
    height: 80px;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-around;
`

const BottomText = styled(motion.div)`
    margin-top: 10px;
    text-align: center;
    overflow: hidden;
    h3 {
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${props => props.theme.text};
        opacity: 0.9;
        span {
            color: var(--clr-red);
            margin-right: 10px;
        }
    }
`

export const Puzzle = () => {
    const { isLast } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const [items, setItems] = useState([
        { name: "1", name_flipped: "P", id: "card-0", status: "unsorted" },
        { name: "2", name_flipped: "O", id: "card-1", status: "unsorted" },
        { name: "3", name_flipped: "R", id: "card-2", status: "unsorted" },
        { name: "4", name_flipped: "T", id: "card-3", status: "unsorted" },
        { name: "-", name_flipped: "-", id: "card-4", status: "sorted" },
        { name: "5", name_flipped: "F", id: "card-5", status: "unsorted" },
        { name: "6", name_flipped: "O", id: "card-6", status: "unsorted" },
        { name: "7", name_flipped: "L", id: "card-7", status: "unsorted" },
        { name: "8", name_flipped: "I", id: "card-8", status: "unsorted" },
        { name: "9", name_flipped: "O", id: "card-9", status: "unsorted" },
    ])
    const sortedAmount = items.filter(item => item.status === "unsorted").length;
    const [sorted, setSorted] = useState(sortedAmount)
    const [sortAll, setSortAll] = useState(false)

    const draggable = items.map((item, dragIndex) => {
        const props = { item }

        return <Draggable key={`draggable - ${dragIndex}`} {...props} />
    })

    const droppable = items.map((item, dropIndex) => {
        const props = { item, sortAll, dropIndex }

        return <Droppable key={`droppable - ${dropIndex}`} {...props} ></Droppable>
    })

    const handleDragEnd = ({ active, over }) => {
        const newState = items.map(item => {
            if (active.id === over.id && item.id === over.id) {
                setSorted(sorted - 1)
                return { ...item, status: "sorted" }
            }
            return item
        })
        setItems(newState)
    }

    useEffect(() => {
        if (!sortAll && sorted === 0) {
            setTimeout(() => {
                setSortAll(true)
            }, [1000])
        }
    }, [sortAll, sorted])

    return (
        <PuzzleTable
            initial={false}
            animate={isLast ? "animate" : "initial"}
            variants={{ animate: { opacity: [1, 0], transition: { duration: 1 } } }}
            onAnimationComplete={() => dispatch({ type: "PUZZLE_ANIMATE", complete: true })}
        >
            <DndContext onDragEnd={handleDragEnd}>
                <DraggableArea
                    initial={false}
                    animate={sortedAmount === 0 ? "contract" : "initial"}
                    variants={{
                        contract: { height: 0, transition: { duration: 1 } }
                    }}
                >
                    {draggable}
                </DraggableArea>
                <DroppableArea>
                    {droppable}
                </DroppableArea>
                <BottomText initial={false} animate={isLast ? "animate" : "initial"}>
                    <motion.h3 variants={{ animate: { y: 100, transition: { duration: 1 } } }}>
                        <span>Drag</span>
                        the card to finish the puzzle.
                    </motion.h3>
                </BottomText>
            </DndContext>
        </PuzzleTable>
    )
}