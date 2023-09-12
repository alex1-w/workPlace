import styles from './Tag.module.scss'
import { FC } from 'react'

interface ITag {
    name: string
}

export const Tag: FC<ITag> = ({ name }) => {
    return (
        <div className={styles.main}>
            <p>{name}</p>
        </div>
    )
}
