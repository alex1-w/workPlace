'use client'
import styles from './DiscloserData.module.scss'
import { FC, useRef, useState } from 'react'
import { arrowDownIcon } from '@/icons/icons'
import { motion } from 'framer-motion'

export const DiscloserData: FC<{ title: string, text: React.ReactNode }> = ({ text, title }) => {
    const [isDiscloserText, setIsDiscloserText] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const showText = () => {
        setIsDiscloserText(!isDiscloserText)
        ref?.current?.classList.toggle(styles.active)
    }

    return (
        <motion.div
            className={styles.main}
            initial={{ height: '35px' }}
            animate={isDiscloserText ? { height: 'auto' } : { height: '35px' }}
            exit={{ height: '23px' }}
            onClick={showText}
        >
            <div ref={ref}>
                <p>{title}</p>
                {arrowDownIcon}
            </div>

            <div>
                <p>{text}</p>
            </div>
        </motion.div>
    )
}
