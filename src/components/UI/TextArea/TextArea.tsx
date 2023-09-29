import styles from './TextArea.module.scss'
import { FC, HTMLProps } from 'react'

interface ITextArea extends HTMLProps<HTMLTextAreaElement> {
    cols: number;
    rows: number;
    placeholder: string;
}

export const TextArea: FC<ITextArea> = ({ name, cols, rows, placeholder, ...rest }) => {
    return (
        <div className={styles.main}>
            <textarea
                name={name}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}
