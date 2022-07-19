import styled from 'styled-components'

export const Dot = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 100%; 
    background-color: ${({ dotColor }) => (dotColor ? dotColor : 'var(--clr-cursor)')};
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 999;
    &.toggle_theme {
        width: 20px;
        height: 20px;
        background-color: var(--clr-red);
    }
    &.pointer {
        width: 80px;
        height: 80px;
        background-color: var(--clr-red);
        clip-path: polygon(25% 25%, 25% 10.36%, 38.9% 10.36%, 38.9% 25%, 44.61% 21.8%, 50.32% 25%, 56.04% 21.8%, 61.75% 25%, 61.75% 54.25%, 25% 54.25%);
        transform: translate(-25%, -25%);
        transition: 0.5s;
        transition-property: width, height, background-color, clip-path;
        &.turn-dark {
            background-color: var(--clr-dark-red);
        }
    }
    &.key {
        width: 80px;
        height: 80px;
        clip-path: polygon(4% 19%, 11% 9%, 21% 16%, 28% 6%, 38% 12%, 30% 22%, 37% 26%, 45% 16%, 53% 21%, 45% 31%, 61% 40%, 66% 33%, 91% 48%, 74% 74%, 49% 59%, 55% 49%);
        background-image: radial-gradient( circle farthest-corner at 5.6% 54.5%,  rgba(47,71,79,1) 0%, rgba(159,188,198,1) 83.6% );;
        transition: 0.5s;
        transition-property: width, height, clip-path, background-color;
    }
    &.drag_hovered {display: none;}
    &.loader-check {background: var(--clr-white); }
    &.navigate {    
        width: 50px;
        height: 50px;
        clip-path: polygon(50% 0, 50% 30%, 100% 20%, 100% 80%, 50% 70%, 50% 100%, 0 50%);
        background-color: var(--clr-red);
        border-radius: 0;
        transition: width .5s, 
                    height .5s,
                    clip-path .5s,
                    background-color .5s;
        &.down {
            clip-path: polygon(80% 0, 70% 50%, 100% 50%, 50% 100%, 0 50%, 30% 50%, 20% 0);
        }
    }
`

export const Outline = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({ outlineColor }) => (outlineColor ? outlineColor : 'var(--clr-cursor)')};
    transform: translate(-50%, -50%);
    transition: .1s;
    pointer-events: none;
    z-index: 999;
    &.toggle_theme {
        background-color: var(--clr-red);
        border: none;
        opacity: 0.3;
        transition: .3s;
    }
    &.pointer {display: none;}
    &.key {display: none;}
    &.drag_active {
        width: 100px; height: 100px;
        border: 2px dashed ${props => props.theme.border};
        border-radius: 50%;
        animation: spin 10s linear infinite;
        @keyframes spin {
            0% {transform: translate(-50%, -50%) rotate(0deg);}
            100% {transform: translate(-50%, -50%) rotate(360deg);}
        }
    }
    &.drag_hovered {
        &.drag_hovered {
        width: 90px; height: 90px;
        border: none;
        background-color: var(--clr-red);
        transition: width .5s,  height .5s, background-color .5s;
        &::after {
            content: 'Drag';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            font-size: 25px;
            color: var(--clr-white);
            letter-spacing: 2px;
            }
        }
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 95px;
            height: 95px;
            border-radius: 50%;
            box-shadow: 0 0 3px ${props => props.theme.border};
        }
    }
    &.navigate {
        width: 100px;
        height: 100px;
        border: 2px solid var(--clr-red);
        transition: width .5s,
                        height .5s;
    }
`