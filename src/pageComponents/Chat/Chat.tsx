import styles from './Chat.module.scss'
import { freelancers } from '@/links/links.data'
import { ChatList } from './components/ChatList/ChatList'
import { ChatWindow } from './components/ChatWindow/ChatWindow'
import { Container } from '@/components/Container/Container'

export const Chat = () => {
    const chattingUsers = freelancers.slice(0, 5)

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.wrapper}>
                    <ChatList chattingUsers={chattingUsers} />
                    <ChatWindow />
                </div>
            </Container>
        </main>
    )
}
