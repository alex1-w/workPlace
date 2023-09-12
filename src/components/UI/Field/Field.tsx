import styles from './Field.module.scss'
import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IField {
    name?: string
    placeholder: string
    type: string
    btnName?: string
}

export const Field: FC<IField & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({ name = 'search', placeholder, btnName = 'Найти', ...rest }) => {
    return (
        <div className={styles.main}>
            <div>
                <input name={name} {...rest} placeholder={placeholder} />
            </div>

            <button>
                <p>{btnName}</p>
            </button>
        </div>
    )
}
