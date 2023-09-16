import styles from './ChatList.module.scss'
import { FC } from 'react'
import { IFreelancer } from '@/types/IFreelancer'
import { ChatItem } from './ChatItem/ChatItem'

interface IChatList {
    chattingUsers: IFreelancer[]
}

export const ChatList: FC<IChatList> = ({ chattingUsers }) => {

    return (
        <aside className={styles.main}>
            <div className={styles.inputBlock}>
                <input type="text" placeholder='Найти' />
            </div>
            <div>
                {chattingUsers.map(user => (
                    <ChatItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </aside>
    )
}
