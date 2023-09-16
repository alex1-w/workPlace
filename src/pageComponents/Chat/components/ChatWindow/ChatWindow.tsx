import styles from './ChatWindow.module.scss'
import { freelancers } from '@/links/links.data'
import Image from 'next/image'
import { MessageInterface } from './MessageInterface/MessageInterface'

export const ChatWindow = () => {
    const user = freelancers[0]
    return (
        <div className={styles.main}>
            <div className={styles.pickedUser}>
                <Image alt={user.name} src={user.img} width={80} height={80} />
                <div>
                    <p>{user.name}</p>
                    <p>онлайн</p>
                </div>
            </div>



         <MessageInterface />
        </div>
    )
}
