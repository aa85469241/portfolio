import React from 'react'
// styles
import { CustomButton } from './button.style'

export const Button = ({ btnType, onClick, initial, animate, variants, children, ...props }) => {
    return (
        <CustomButton
            className={btnType}
            onClick={onClick}
            initial={initial}
            animate={animate}
            variants={variants}
            {...props}
        >
            <span className='button-text'>{children}</span>
        </CustomButton>
    )
}
