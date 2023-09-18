import { paperClipIcon } from '@/icons/icons'
import styles from './MessageInterface.module.scss'
import { Field } from '@/components/UI/Field/Field'

export const MessageInterface = () => {
    return (
        <div className={styles.main}>

            <div>{paperClipIcon}</div>
            
            <div className={styles.inputBlock}>
                <input type="text" placeholder='Введите Ваше сообщение' />
            </div>

            <button><p>Отправить</p></button>

        </div>
    )
}
