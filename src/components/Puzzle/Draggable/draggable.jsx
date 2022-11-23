import React from 'react'
import styled from "styled-components"
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { images } from "../../../constants"


const Card = styled.div`
    position: relative;
    width: 65px;
    display: flex;
    place-items: center;
    place-content: center;
    padding: 10px;
    background-image: url(${images.stamp_outline});
    background-color: var(--clr-white);
    background-repeat: no-repeat;
    background-position: center;
    aspect-ratio: 1 / 1;
    z-index: 10;
    .draggable-area {
        position: absolute;
        inset: 0;
        cursor: grab;
    }
    .text { 
        font-size: 20px; 
        color: var(--clr-white);
        }
`

const Draggable = ({ item }) => {

    const {
        isDragging,
        attributes,
        listeners,
        setNodeRef,
        transform
    } = useDraggable({ id: item.id, });

    const style = {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 1 : 0.7,
        transition: isDragging ? "0s" : "0.5s",
    };

    return (
        <>
            {item.status === "sorted"
                ? null
                : <Card
                    ref={setNodeRef}
                    style={style}
                    top={item.y}
                    left={item.x}
                    {...listeners}
                    {...attributes}
                >
                    <span className="draggable-area" />
                    <span className="text">{item.name}</span>
                </Card>}
        </>
    );
}

export default Draggable