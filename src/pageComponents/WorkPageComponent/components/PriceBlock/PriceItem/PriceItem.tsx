'use client'
import styles from './PriceItem.module.scss'
import { arrowDownIcon } from '@/icons/icons'
import { IPriceVariant } from '@/types/IPriceVariant'
import { FC, useRef, useState } from 'react'
import { DiscloserData } from '@/components/UI/DiscloserData/DiscloserData'
import { motion } from 'framer-motion'
import { currencyFormatter } from '@/helpers/currencyFormatter'

export const PriceItem: FC<IPriceVariant> = ({ additionalOptions, description, name, price, reworkCount, timeFrame }) => {
    const [isDiscloserText, setIsDiscloserText] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const showText = (e: any) => {
        e.stopPropagation()
        setIsDiscloserText(!isDiscloserText)
        ref?.current?.classList.toggle(styles.active)
    }

    return (
        <motion.div
            className={styles.main}
            initial={{ height: '60px' }}
            animate={isDiscloserText ? { height: 'auto' } : { height: '60px' }}
            exit={{ height: '60px' }}
        >
            <div
                className={styles.head}
                onClick={(e) => showText(e)}
                ref={ref}
            >
                <p>{name}</p>
                {arrowDownIcon}
            </div>

            <div className={styles.mainContent}>
                <p>{description}</p>

                <div className={styles.mainContent__head}>
                    <p>{currencyFormatter(price)}</p>
                    <p>Сделаю за {timeFrame} дней</p>
                </div>

                <p>количество доработок: {reworkCount}</p>

                <div className={styles.mainContent__additional}>
                    <p>Дополнительные опции</p>
                    <div>
                        {additionalOptions.map((item, i) => (
                            <DiscloserData title={item.name} text={item.description} key={i} />
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
