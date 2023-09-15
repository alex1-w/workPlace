'use client'
import { arrowDownIcon, certificateIcon, clockIcon, educationIcon, languageIcon, worldIcon } from '@/icons/icons'
import styles from './DetailedInfoComponent.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

const detailedUserInfo = [
    {
        name: `страна`,
        icon: worldIcon,
        value: `Казахстан, Алматы`
    },
    {
        name: `на сайте`,
        icon: clockIcon,
        value: '3 года'
    },
    {
        name: `образование`,
        icon: educationIcon,
        value: 'Казахстан, КазНУ, Бакалавр Казахстан, КБТУ, Магистратура'
    },
    {
        name: `знание языков`,
        icon: languageIcon,
        value: 'Казахский Русский'
    },
    {
        name: `сертификаты`,
        icon: certificateIcon,
        value: 'Сертификат 1, 2020 года Сертификат 2, 2021 года'
    },

]
type DetalePlaceholder = 'скрыть подробную информацию' | 'скрыть подробную информацию'

export const DetailedInfoComponent = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const arrowRef = useRef<HTMLDivElement>(null)

    const changeDetails = () => {
        setShowDetails(!showDetails)
        arrowRef?.current?.classList.toggle(styles.active)
    }
    const placeHolderResolver = () => showDetails ? 'скрыть подробную информацию' : 'показать подробную информацию'

    return (
        <motion.div
            className={styles.main}
            initial={{ height: 50 }}
            animate={showDetails ? { height: "fit-content" } : { height: 50 }}
            exit={{ height: 50 }}
            onClick={changeDetails}
        >
            <div ref={arrowRef}>
                <p>{placeHolderResolver()}</p>
                {arrowDownIcon}
            </div>

            <div className={styles.infoBlock}>
                <ul>
                    {detailedUserInfo.map(item => (
                        <li key={item.value} >

                            <div>
                                {item.icon}
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <p>{item.value}</p>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </motion.div>
    )
}