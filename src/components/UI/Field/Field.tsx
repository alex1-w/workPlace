import styles from './Field.module.scss'
import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IField {
    name?: string
    placeholder: string
    type: string
    btnName?: string
    variant?: 'withButton' | 'simple'
}

export const Field: FC<IField & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({ variant = 'withButton', name = 'search', placeholder, btnName = 'Найти', ...rest }) => {
    return (
        <div className={styles[variant]}>
            <div>
                <input name={name} {...rest} placeholder={placeholder} />
            </div>

            <button>
                <p>{btnName}</p>
            </button>
        </div>
    )
}
