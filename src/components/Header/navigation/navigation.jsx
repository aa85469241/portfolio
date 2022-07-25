import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BsTriangle, BsTriangleFill } from 'react-icons/bs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// framer motion
import { AnimatePresence, motion } from 'framer-motion'
// context
import { useCursor } from '../../../context/cursorContext'
// styles
import { images, variants } from '../../../constants'
import { NavMenu, Contact, List } from './navigation.style'


const items = [
    { id: 1, path: '/', title: 'Home' },
    { id: 2, path: '/about', title: 'About' },
]

const Navigation = ({ open }) => {

    const [hovered, setHover] = useState(false)
    const [actived, setActive] = useState(false)
    const [copied, setCopied] = useState(false)
    const [copiedText, setCopiedText] = useState('')

    const { setCursorType } = useCursor()

    const location = useLocation();

    const onHover = () => {
        setHover(true)
        setCursorType('navigate down')
    }

    const onLeave = () => {
        setHover(false)
        setCursorType('')
    }

    const handleCopy = (copiedText) => {
        if (!copied) {
            setCopied(true)
            setCopiedText(copiedText)
            setTimeout(() => {
                setCopied(false)
            }, 1500)
        }
    }

    useEffect(() => {
        if (!open && actived === true) setActive(false)
    }, [actived, open])


    return (
        <NavMenu
            initial={false}
            animate={open ? 'open' : 'closed'}
            variants={variants.headerVariants.navWrapper}
        >
            <motion.ul
                className='nav-list'
                variants={variants.headerVariants.stagger}>
                {items.map((item) => (
                    <motion.li key={item.id} variants={variants.headerVariants.item}>
                        <NavLink
                            to={item.path}
                            className={`navigate ${item.path === location.pathname && 'active'}`}
                            onMouseEnter={() => setCursorType('navigate')}
                            onMouseLeave={setCursorType}
                            onClick={setCursorType}
                        >{item.title}</NavLink>
                    </motion.li>
                ))}
                <Contact variants={variants.headerVariants.item}>
                    <motion.span
                        className={`navigate ${actived ? 'expanded' : ''}`}
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                        onClick={() => setActive(!actived)}
                    >contact</motion.span>
                    <motion.span
                        className='toggle-sign'
                        initial='initial'
                        animate={actived ? 'active' : 'initial'}
                        variants={{
                            active: { rotate: 180 },
                            initial: { rotate: 0 }
                        }}>
                        {hovered || actived ? <BsTriangleFill className='sign' /> : <BsTriangle className='sign' />}
                    </motion.span>
                    <AnimatePresence>
                        {actived &&
                            <List
                                initial='initial'
                                animate={actived && 'active'}
                                exit='exit'
                                variants={variants.headerVariants.stagger}
                            >
                                <CopyToClipboard text='0988207525'
                                    onCopy={() => handleCopy('Phone')}
                                >
                                    <motion.span className='icon-wrapper phone' variants={variants.headerVariants.icon}>
                                        <img src={images.phone} alt="phone" className="phone-icon" />
                                    </motion.span>
                                </CopyToClipboard>
                                <CopyToClipboard text='defghl7563000@gmail.com'
                                    onCopy={() => handleCopy('Mail')}
                                >
                                    <motion.span className='icon-wrapper mail' variants={variants.headerVariants.icon}>
                                        <img src={images.mail} alt="mail" className="mail-icon" />
                                    </motion.span>
                                </CopyToClipboard>
                                {copied ? <span className='copy-text'>{`${copiedText} has been copied!`}</span> : null}
                            </List>
                        }
                    </AnimatePresence>
                </Contact>
            </motion.ul>
        </NavMenu>
    )
}

export default Navigation
