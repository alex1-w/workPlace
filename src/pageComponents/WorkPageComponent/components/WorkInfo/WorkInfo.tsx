import styles from './WorkInfo.module.scss'
import Image from 'next/image'
import { works } from '@/links/links.data'
import { DiscloserData } from '@/components/UI/DiscloserData/DiscloserData'

const asks = [
    {
        title: 'Исходники будут?',
        text: 'Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на'
    },
    {
        title: 'А в каком формате я получу исходники?',
        text: 'Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на'
    },
    {
        title: 'А что если мне не понравиться дизайн?',
        text: 'Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на'
    },
]

const additionalInfo = [
    { text: 'Предоставить Техническое задание где есть текста для сайта и все необходимые медиа(фото, видео и т.п.)' },
    { text: 'bgjrvksf mgebjrdfkn uwiogerajsdugufweiabsdjknxcg urbisvdnjkxc ' }
]

const work = works[0]
export const WorkInfo = () => {

    return (
        <div className={styles.main}>
            <div>
                <Image alt={work.title} src={work.img} fill />
            </div>

            <div className={styles.mainInfo}>
                <p>{work.description}</p>

                <div>

                    <h3>Часто задаваемые вопросы</h3>

                    <div className={styles.mainInfo__askBlock}>
                        {asks.map(item => (
                            <DiscloserData text={item.text} title={item.title} key={item.title} />
                        ))}
                    </div>
                </div>

                <div className={styles.mainInfo__additionalInfo}>
                    <h3>Требования к заказчику</h3>
                    <ul>
                        {additionalInfo.map((item, i) => (
                            <li key={i}>
                                <p>{`${i + 1}. ${item.text}`}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div >
    )
}
