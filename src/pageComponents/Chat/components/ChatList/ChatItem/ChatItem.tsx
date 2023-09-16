import styles from './ChatItem.module.scss'
import { IFreelancer } from '@/types/IFreelancer'
import Image from 'next/image'
import { FC } from 'react'

export const ChatItem: FC<{ user: IFreelancer }> = ({ user }) => {
    return (
        <div className={styles.main}>
            <Image alt={user.name} src={user.img} width={80} height={80} />
            <div>
                <p>{user.name}</p>
                <p>fgt fgtre ftr bftruiewgrchui</p>
            </div>
        </div>
    )
}
