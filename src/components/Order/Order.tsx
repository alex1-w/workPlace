import styles from './Order.module.scss'
import { FC } from 'react'
import { IOrder } from '@/types/IOrder'
import { Document } from './Document/Document'

export const Order: FC<IOrder> = ({ category, createdAt, id, offers, owner, price, title, timeFrame, description, documents }) => {
    
    return (
        <div className={styles.main}>
            <div className={styles.mainInfo}>
                <div>
                    <h1>{title}</h1>
                    <p>{category}</p>
                </div>
                <div>
                    <p>{price}&nbsp;тенге</p>
                    <p>до {timeFrame}</p>
                </div>
            </div>
            <div className={styles.descriptionBlock}>
                <p>{description}</p>
            </div>
            <div className={styles.documentsBlock}>
                {documents?.map((item, i) => (
                    <Document doc={item} key={i} />
                )
                )}
            </div>
            <p>предлжений: {offers || 0}</p>
        </div>
    )
}
