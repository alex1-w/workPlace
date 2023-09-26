'use client'
import styles from './DiscloserData.module.scss'
import { FC, useRef, useState } from 'react'
import { arrowDownIcon } from '@/icons/icons'
import { AnimatePresence, motion } from 'framer-motion'

export const DiscloserData: FC<{ title: string, text: React.ReactNode }> = ({ text, title }) => {
    const [isDiscloserText, setIsDiscloserText] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const showText = () => {
        setIsDiscloserText(!isDiscloserText)
        ref?.current?.classList.toggle(styles.active)
    }

    return (
        <div className={styles.main} onClick={showText}>
            <div ref={ref}>
                <p>{title}</p>
                {arrowDownIcon}
            </div>

            <AnimatePresence>
                {isDiscloserText &&
                    <motion.div
                        className={styles.mainContent}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                    >
                        <p>{text}</p>
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}
