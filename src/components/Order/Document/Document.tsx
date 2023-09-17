import styles from './Document.module.scss'
import { FC } from 'react'
import { fileIcon } from '@/icons/icons'


export const Document: FC<{ doc: string }> = ({ doc }) => {

    return (
        <div className={styles.main}>
            {fileIcon}
            <p>Document</p>
            <div>
                <p>{doc}</p>
            </div>
        </div>
    )
}
