import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GroupSelector = styled(motion.span)`
    --border-dash: 3px dashed ${props => props.theme.border};
    --border-solid: 3px solid ${props => props.theme.border};
    position: absolute;
    top: 0; 
    left: 0;
    height: 100%;
    background: ${props => props.theme.background};
    box-shadow: var(--shadow-1);
    z-index: 1;
`

export const LockBody = styled(motion.div)`
    position: absolute;
    top: 40%;
    left: 40%;
    width: 130px;
    height: 130px;
    border: 3px solid ${props => props.theme.border};
    border-radius: 20px;
    box-shadow: 2px 2px 3px ${props => props.theme.border};
    .lock-body-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: ${props => props.theme.background};
        transition: background-color .3s ease-in-out;
        .lock-head {
            position: absolute;
            top: -50%;
            left: 50%;
            width: 80px;
            height: 80px;
            border: 10px double ${props => props.theme.border};
            border-radius: 18px;
            transform: translate(-50%, 25%);
            z-index: -1;
        }
        .key-cylinder {
            position: relative;
            top: 45%;
            left: 50%;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: ${props => props.theme.border};
            transform: translate(-50%, -50%);
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 15px;
                height: 30px;
                border-radius: 20px;
                background-color: ${props => props.theme.border};
                transform: translateX(-50%);
            }
        }
    }
    &:hover {
        .lock-body-wrapper {
            background-color: var(--clr-wood);
        }
    }
`
